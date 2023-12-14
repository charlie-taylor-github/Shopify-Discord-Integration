// imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/index.js");
const bot = require("./controllers/discord_controller.js");

// middleware
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use("/", router);
const { error: botError } = bot.init();
if (botError) throw botError;

// start server
app.listen(port, () => {
  console.log(`server is running...  [port: ${port}]`);
});
