"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var line = require("@line/bot-sdk");
var express = require("express");
var webhookHandler = require("./handler/webhook");
//
var config = require('../config.json');
var app = express();
var port = process.env.PORT || 3000;
//
app.post('/webhook', line.middleware(config), webhookHandler);
app.listen(port, function () {
    console.log("listening on " + port + "\n\n    you can connect to Nongrapee by send \n\n    POST-request to http://localhost:3000/webhook \n\n    ");
});
//# sourceMappingURL=app.js.map