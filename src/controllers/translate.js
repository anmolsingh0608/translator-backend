const { validationResult } = require("express-validator");
// const translate = require('google-translate-api');
const { translate } = require("@vitalets/google-translate-api");
const { translate: _translate } = require("free-translate");
var DetectLanguage = require("detectlanguage");

var detectlanguage = new DetectLanguage("a5ca827c7a9bbea06ad7e1a0377ba40d");

const createHttpProxyAgent = require("http-proxy-agent");
// const agent = createHttpProxyAgent("https://51.254.69.243:3128");

const translateFunction = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json(errors);
  } else {
    const { query, from, to } = req.body;
    const result = await detectlanguage.detect(query);
    const srcLang = result[0].language;
    translate(query, {
      to: to,
      from: from,
      // fetchOptions: { agent },
    })
      .then((response) => {
        const sendRes = {
          raw: response.raw,
          text: response.text,
          srcLang: srcLang,
        };
        res.status(200).send(sendRes);
        //=> nl
      })
      .catch((err) => {
        console.error(err);
        if (err.name === "TooManyRequestsError") {
          _translate(query, {
            to: to,
            from: from,
            // fetchOptions: { agent },
          })
            .then((response) => {
              console.log(response);
              res
                .status(200)
                .json({ raw: [], text: response, srcLang: srcLang });
              //=> nl
            })
            .catch((err) => {
              res.status(500).json(err);
            });
        }
      });
  }
};

module.exports = {
  translateFunction,
};
