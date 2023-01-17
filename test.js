const gTTS = require("gtts");

var speech = "he is best.";
var gtts = new gTTS(speech, "en");

gtts.save("public/mp3/Voice.mp3", function (err, result) {
  if (err) {
    console.log(err);
    console.log("language not supported");
  } else console.log("Text to speech converted!");
});
