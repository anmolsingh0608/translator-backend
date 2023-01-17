var DetectLanguage = require('detectlanguage');

var detectlanguage = new DetectLanguage('a5ca827c7a9bbea06ad7e1a0377ba40d');

var text = "ਤੁਸੀ ਕਿਵੇਂ ਹੋ? ਮੈਂ ਠੀਕ ਹਾਂ. ਤੁਸੀਂ ਆਪਣੇ ਬਾਰੇ ਦੱਸੋ. ਕੀ ਤੁਸੀਂ ਚੰਗੇ ਹੋ? ਮੈਂ ਮੰਨਦਾ ਹਾਂ ਕਿ ਤੁਸੀਂ ਹੋ। ਤੁਸੀਂ ਠੀਕ ਜਾਪਦੇ ਹੋ";

async function an() {
  let result = await detectlanguage.detect(text);
  console.log((result[0].language));
}

an()
