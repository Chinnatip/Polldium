'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var line = require("@line/bot-sdk");
var express = require("express");
var handleEvent_1 = require("./handleEvent");
//
var config = require('../config.json');
var app = express();
// webhook callback
app.post('/webhook', line.middleware(config), function (req, res) {
    var events = req.body.events;
    // req.body.events should be an array of events
    if (!Array.isArray(events)) {
        return res.status(500).end();
    }
    // handle events separately
    Promise.all(events.map(function (event) {
        // LINE VERIFY Webhook event
        var replyToken = event.replyToken;
        if (replyToken === '00000000000000000000000000000000' ||
            replyToken === 'ffffffffffffffffffffffffffffffff') {
            return;
        }
        return handleEvent_1.handleEvent(event);
    }))
        .then(function () { return res.end(); })
        .catch(function (err) {
        console.error(err);
        res.status(500).end();
    });
});
var port = config.port;
app.listen(port, function () {
    console.log("listening on " + port);
});
//# sourceMappingURL=index.js.map