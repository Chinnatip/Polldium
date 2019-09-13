"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler = require("./actionHandler");
exports.intentHandler = function (message, replyToken) {
    switch (message.text) {
        case '':
            return Handler.replyText(replyToken, "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E30\u0E44\u0E23\u0E21\u0E32\u0E2B\u0E19\u0E48\u0E2D\u0E22\u0E0B\u0E35\u0E48 ~~~");
        case 'เริ่มทำโพลล์':
            return Handler.replyText(replyToken, "Let's go");
        default:
            return Handler.replyText(replyToken, "ECHO::" + message.text);
    }
};
//# sourceMappingURL=intentHandler.js.map