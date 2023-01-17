const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { translateFunction } = require("../controllers/translate");

router.post(
  "/",
  [
    check("query", "query is required.").exists().notEmpty(),
    check("to", "To is required").exists().notEmpty(),
    check("from", "From is required").exists().notEmpty(),
  ],
  translateFunction
);

module.exports = router;
