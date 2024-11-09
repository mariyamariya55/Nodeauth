const express = require('express');
const APP_SERVER = express();


APP_SERVER.use("/api",require("./Router/logianrouter"));
APP_SERVER.use("/api",require("./Router/studentrouter"))



module.exports = APP_SERVER;