const express = require("express");
const cors = require("cors");
const translate = require("./src/routes/translate");
const bodyparser = require("body-parser");
const app = express();
const port = 5000;
const listen = require("./src/routes/listen");
const { use } = require("./src/routes/translate");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// app.use(bodyparser.json());
app.use("/api/translate", translate);
app.use("/api/listen", listen);

app.listen(port, () => console.log(`server running on port ${port}`));
