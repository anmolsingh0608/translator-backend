const gTTS = require("gtts");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const fs = require("fs");

const listen = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json(errors);
  } else {
    const { speech, language } = req.query;
    console.log(req.query);
    const gtts = new gTTS(speech, language);
    const uid = uuidv4();
    gtts.save(`public/mp3/${uid}.mp3`, function (err, result) {
      if (err) {
        res.status(403).json(err);
      } else {
        const data = fs.readFileSync(`public/mp3/${uid}.mp3`);
        let base64String = data.toString("base64");
        const base64mp3 = "data:audio/mp3;base64," + base64String;
        fs.unlinkSync(`public/mp3/${uid}.mp3`);
        res.status(200).json({ name: `${uid}.mp3`, audio: base64mp3 });
      }
    });
  }
};

const convertToBase64 = (mp3File) => {
  const file = mp3File;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result;
      resolve(base64String);
    };
    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsDataURL(file);
  });
};

module.exports = { listen };
