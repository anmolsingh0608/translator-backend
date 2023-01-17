const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { listen } = require("../controllers/listen");

router.get(
  "/",
  [
    check("speech", "Text is required").exists(),
    check("language", "Language is required").exists(),
  ],
  listen
);

module.exports = router;
