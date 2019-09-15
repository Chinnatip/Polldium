"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var line = require('@line/bot-sdk');
var config = require('../../config.json');
var client = new line.Client(config);
var intentHandler_1 = require("./intentHandler");
var Richmenu = require("../rich_menu/menu");
var flex_share_card_1 = require("../flex_message/flex_share_card");
var flex_calling_1 = require("../flex_message/flex_calling");
var Card = require("../flex_message/carousel_card");
var Cheat = require("../content/cheat");
// simple reply function
exports.replyText = function (token, texts) {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.replyMessage(token, texts.map(function (text) { return ({ type: 'text', text: text }); }));
};
exports.sharePoint = function (token) {
    return client.replyMessage(token, [
        flex_share_card_1.shareCard('มาเป็นเพื่อนกับน้องรพี', '@258zuvzn', 'http://nav.cx/6xrKRnC', 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/Polldium_qr_code.png', 'เเสกน QR CODE นี้ จากนั้นเเอดเป็นเพื่อนกับน้องรพี เพื่อสอบถามปัญหาด้านกฎหมาย')
    ]);
};
// Choice card
exports.fraudChoice = function (token) {
    return client.replyMessage(token, Cheat.content.map(function (item) {
        return { type: 'text', text: item };
    }).concat([
        { type: 'text', text: 'กรุณาเลือกข้อมูลที่สนใจ' },
        Card.carousel('fraud choice', [
            {
                title: 'โดนโกงทำอย่างไรดี ?',
                desc: 'เลือกปัญหาที่โดนโกง',
                imgUrl: 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/Polldium_qr_code.png',
                actions: [
                    {
                        label: 'โกงเงิน',
                        text: 'โกงเงิน'
                    },
                    {
                        label: 'โกงที่ดิน',
                        text: 'โกงที่ดิน'
                    }
                ]
            }
        ])
    ]));
};
exports.mortgageChoice = function (token) {
    return client.replyMessage(token, [
        { type: 'text', text: 'คุณเป็นเจ้าหนี้หรือลูกหนี้ ?' },
        Card.carousel('mortgage choice', [
            {
                title: 'เป็นเจ้าหนี้',
                desc: 'เลือกปัญหาที่เจอ',
                imgUrl: 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/Polldium_qr_code.png',
                actions: [
                    {
                        label: 'ทวงหนี้ยังไงดี',
                        text: 'ทวงหนี้ไม่ได้ทำยังไงดี ?'
                    },
                    {
                        label: 'ทวงหนี้ยังไงไม่ติดคุก',
                        text: 'ทวงหนี้ยังไงไม่ให้ติดคุก ?'
                    }
                ]
            },
            {
                title: 'เป็นลูกหนี้',
                desc: 'เลือกปัญหาที่เจอ',
                imgUrl: 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/Polldium_qr_code.png',
                actions: [
                    {
                        label: 'ติดหนี้',
                        text: 'ติดหนี้'
                    },
                    {
                        label: 'ติดหนี้แบบอื่นๆ',
                        text: 'อื่นๆ'
                    }
                ]
            }
        ])
    ]);
};
exports.accidentChoice = function (token) {
    return client.replyMessage(token, [
        { type: 'text', text: 'อยากให้ช่วยเหลือด้านใดครับ ?' },
        Card.carousel('mortgage choice', [
            {
                title: 'หัวข้อที่มี',
                desc: 'เลือกปัญหาที่เจอ',
                imgUrl: 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/Polldium_qr_code.png',
                actions: [
                    {
                        label: 'ประกันภัย',
                        text: 'ประกันภัย'
                    },
                    {
                        label: 'ค่าเสียหาย',
                        text: 'ค่าเสียหาย'
                    }
                ]
            }
        ])
    ]);
};
exports.calling = function (token, calling_id) {
    return client.replyMessage(token, [
        { type: 'text', text: 'กรุณากดเบอร์โทรเจ้าหน้าที่' },
        flex_calling_1.flex_calling(calling_id)
    ]);
};
exports.callingLawyer = function (token) {
    return client.replyMessage(token, [
        {
            type: 'text',
            text: 'ระบุที่อยู่ของคุณ',
            quickReply: {
                items: [
                    {
                        type: 'action',
                        action: {
                            type: 'location',
                            label: 'Location'
                        }
                    }
                ]
            }
        }
    ]);
};
exports.handleText = function (message, source, replyToken) {
    return intentHandler_1.intentHandler(message, source, replyToken);
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
    // console.log('get loc >>>', message)
    var type = message.type, id = message.id, address = message.address, latitude = message.latitude, longitude = message.longitude;
    var filterLawyer = {
        branch: 'จ.กรุงเทพ',
        branchFull: 'สภาทนายความกรุงเทพฯ',
        telNumber: '02-522-7124'
    };
    return client.replyMessage(replyToken, [
        {
            type: 'text',
            text: "\u0E40\u0E23\u0E32\u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A\u0E27\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E1B\u0E31\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E40\u0E02\u0E15\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07" + filterLawyer.branchFull
        },
        flex_calling_1.flex_calling_lawyer(filterLawyer.branch, filterLawyer.telNumber)
    ]);
    // const compress = [
    //   `ตอนนี้คุณอยู่ที่ [${longitude},${latitude}] ${address}`,
    //   'call me now'
    // ]
    // return replyText(replyToken, compress)
};
exports.handleSticker = function (message, replyToken) {
    console.log('get sticker >>>', message);
    return exports.replyText(replyToken, 'Got Sticker');
};
// Customize action
exports.drawerMenu = function (userId, replyToken) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Richmenu.drawer(userId)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//# sourceMappingURL=actionHandler.js.map