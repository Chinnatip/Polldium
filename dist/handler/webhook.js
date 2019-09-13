"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleEvent_1 = require("./handleEvent");
// Webhook engine
var webhook = function (req, res) {
    var events = req.body.events;
    console.log("User id: " + events[0].source.userId);
    res.json({ status: 'ok' });
    return Promise.all(events.map(handleEvent_1.handleEvent)).catch(function (e) {
        console.log(e);
    });
};
module.exports = webhook;
//# sourceMappingURL=webhook.js.map