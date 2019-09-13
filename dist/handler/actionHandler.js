"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var line = require('@line/bot-sdk');
var config = require('../../config.json');
var client = new line.Client(config);
var intentHandler_1 = require("./intentHandler");
// simple reply function
exports.replyText = function (token, texts) {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.replyMessage(token, texts.map(function (text) { return ({ type: 'text', text: text }); }));
};
exports.handleText = function (message, replyToken) {
    return intentHandler_1.intentHandler(message, replyToken);
};
exports.handleImage = function (message, replyToken) {
    console.log('get image >>>', message);
    return exports.replyText(replyToken, 'Got Image');
};
exports.handleVideo = function (message, replyToken) {
    console.log('get video >>>', message);
    return exports.replyText(replyToken, 'Got Video');
};
exports.handleAudio = function (message, replyToken) {
    console.log('get sound >>>', message);
    return exports.replyText(replyToken, 'Got Audio');
};
exports.handleLocation = function (message, replyToken) {
    console.log('get loc >>>', message);
    var type = message.type, id = message.id, address = message.address, latitude = message.latitude, longitude = message.longitude;
    var compress = [
        "\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48 [" + longitude + "," + latitude + "] " + address,
        'call me now'
    ];
    return exports.replyText(replyToken, compress);
};
exports.handleSticker = function (message, replyToken) {
    console.log('get sticker >>>', message);
    return exports.replyText(replyToken, 'Got Sticker');
};
//# sourceMappingURL=actionHandler.js.map