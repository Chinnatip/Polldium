"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = require("./handler");
// callback function to handle a single event
function handleEvent(event) {
    var type = event.type, message = event.message, postback = event.postback, beacon = event.beacon, source = event.source, replyToken = event.replyToken;
    switch (type) {
        case 'message':
            switch (message.type) {
                case 'text':
                    return Handler.handleText(message, replyToken);
                case 'image':
                    return Handler.handleImage(message, replyToken);
                case 'video':
                    return Handler.handleVideo(message, replyToken);
                case 'audio':
                    return Handler.handleAudio(message, replyToken);
                case 'location':
                    return Handler.handleLocation(message, replyToken);
                case 'sticker':
                    return Handler.handleSticker(message, replyToken);
                default:
                    throw new Error("Unknown message: " + JSON.stringify(message));
            }
        case 'follow':
            return Handler.replyText(replyToken, 'Got followed event');
        case 'unfollow':
            return console.log("Unfollowed this bot: " + JSON.stringify(event));
        case 'join':
            var type_1 = source.type;
            return Handler.replyText(replyToken, "Joined " + type_1);
        case 'leave':
            return console.log("Left: " + JSON.stringify(event));
        case 'postback':
            var data = postback.data;
            return Handler.replyText(replyToken, "Got postback: " + data);
        case 'beacon':
            var beaconType = beacon.type, beaconDm = beacon.dm, hwid = beacon.hwid;
            var dm = "" + Buffer.from(beaconDm || '', 'hex').toString('utf8');
            return Handler.replyText(replyToken, beaconType + " beacon hwid : " + hwid + " with device message = " + dm);
        default:
            throw new Error("Unknown event: " + JSON.stringify(event));
    }
}
exports.handleEvent = handleEvent;
//# sourceMappingURL=handleEvent.js.map