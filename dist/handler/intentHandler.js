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
var Handler = require("./actionHandler");
var Richmenu = require("../rich_menu/menu");
exports.intentHandler = function (message, source, replyToken) { return __awaiter(_this, void 0, void 0, function () {
    var userId, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userId = source.userId;
                _a = message.text;
                switch (_a) {
                    case '': return [3 /*break*/, 1];
                    case 'ความรู้ด้านกฎหมาย': return [3 /*break*/, 2];
                    case 'ติดต่อเจ้าหน้าที่': return [3 /*break*/, 4];
                    case 'โหวตเลย': return [3 /*break*/, 6];
                    case 'อ่านคำให้การ': return [3 /*break*/, 8];
                    case 'เขียนคำให้การ': return [3 /*break*/, 10];
                    case 'อ่านความเห็นฝ่ายที่เห็นด้วย': return [3 /*break*/, 12];
                    case 'อ่านความเห็นฝ่ายที่ไม่เห็นด้วย': return [3 /*break*/, 14];
                    case 'ภาพรวมของเนื้อหา': return [3 /*break*/, 16];
                    case 'ข้อมูลหลักฐานที่เกี่ยวข้อง': return [3 /*break*/, 18];
                    case 'เสียงของคนที่เห็นด้วย': return [3 /*break*/, 20];
                    case 'ย้อนกลับไปหน้า ความคิดเห็น': return [3 /*break*/, 22];
                    case 'อ่านต่อ': return [3 /*break*/, 24];
                    case 'ย้อนกลับไปอ่านข้ออื่น': return [3 /*break*/, 26];
                    case 'ปิดเมนู': return [3 /*break*/, 28];
                    case 'โหวตเห็นด้วย': return [3 /*break*/, 30];
                    case 'โหวตไม่เห็นด้วย': return [3 /*break*/, 32];
                    case 'ย้อนกลับไปหน้า drawer': return [3 /*break*/, 34];
                    case 'เเชร์โพล์นี้': return [3 /*break*/, 35];
                    case 'เลือกอ่านหัวข้ออื่น': return [3 /*break*/, 36];
                }
                return [3 /*break*/, 38];
            case 1: return [2 /*return*/, Handler.replyText(replyToken, "\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E30\u0E44\u0E23\u0E21\u0E32\u0E2B\u0E19\u0E48\u0E2D\u0E22\u0E0B\u0E35\u0E48 ~~~")
                // Opening action
            ];
            case 2: return [4 /*yield*/, Richmenu.topic(userId)];
            case 3:
                _b.sent();
                return [2 /*return*/, Handler.replyText(replyToken, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E44\u0E14\u0E49\u0E40\u0E25\u0E22\u0E04\u0E23\u0E31\u0E1A")];
            case 4: return [4 /*yield*/, Richmenu.calling(userId)];
            case 5:
                _b.sent();
                return [2 /*return*/, Handler.replyText(replyToken, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48")
                    // Topic
                    // case 'รัฐธรรมนูญปี60':
                    //   return Handler.replyText(replyToken, [
                    //     'สรุปการดีเบต แจ็ก หม่า vs อีลอน มัสก์ ในงานประชุม World AI / โดย ลงทุนแมน ลงทุนแมนรับรองว่าเป็นเรื่องน่าสนใจที่สุดในช่วงนี้ เมื่อไม่กี่ชั่วโมงที่ผ่านมา มีการคุยกัน'
                    //   ])
                    // // return Handler.drawerMenu(userId, replyToken)
                    // case 'โรงไฟฟ้าถ่านหิน':
                    //   return Handler.drawerMenu(userId, replyToken)
                    // case 'เสรีภาพทางเพศ':
                    //   return Handler.drawerMenu(userId, replyToken)
                    // case 'ไมโครพลาสติค':
                    //   return Handler.drawerMenu(userId, replyToken)
                    // case 'การค้าเสรี':
                    //   return Handler.drawerMenu(userId, replyToken)
                    // Drawer
                ];
            case 6: return [4 /*yield*/, Richmenu.votePage(userId)];
            case 7:
                _b.sent();
                return [2 /*return*/, Handler.replyText(replyToken, "OK")];
            case 8: return [4 /*yield*/, Richmenu.listenChoose(userId)];
            case 9: return [2 /*return*/, _b.sent()];
            case 10: return [4 /*yield*/, Richmenu.removePage(userId)
                // Listen choose
            ];
            case 11: return [2 /*return*/, _b.sent()
                // Listen choose
            ];
            case 12: return [4 /*yield*/, Richmenu.listenAgree(userId)];
            case 13: return [2 /*return*/, _b.sent()];
            case 14: return [4 /*yield*/, Richmenu.listenAgree(userId)
                // Listen agree
            ];
            case 15: return [2 /*return*/, _b.sent()
                // Listen agree
            ];
            case 16: return [4 /*yield*/, Richmenu.readMore(userId)];
            case 17: return [2 /*return*/, _b.sent()];
            case 18: return [4 /*yield*/, Richmenu.readMore(userId)];
            case 19: return [2 /*return*/, _b.sent()];
            case 20: return [4 /*yield*/, Richmenu.readMore(userId)];
            case 21: return [2 /*return*/, _b.sent()];
            case 22: return [4 /*yield*/, Richmenu.listenChoose(userId)
                // Read more
            ];
            case 23: return [2 /*return*/, _b.sent()
                // Read more
            ];
            case 24: return [4 /*yield*/, Richmenu.back(userId)];
            case 25: return [2 /*return*/, _b.sent()];
            case 26: return [4 /*yield*/, Richmenu.listenAgree(userId)
                // Close ,Back or Share action
            ];
            case 27: return [2 /*return*/, _b.sent()
                // Close ,Back or Share action
            ];
            case 28: return [4 /*yield*/, Richmenu.removePage(userId)];
            case 29: return [2 /*return*/, _b.sent()];
            case 30: return [4 /*yield*/, Richmenu.sharePage(userId)];
            case 31: return [2 /*return*/, _b.sent()];
            case 32: return [4 /*yield*/, Richmenu.sharePage(userId)];
            case 33: return [2 /*return*/, _b.sent()];
            case 34: return [2 /*return*/, Handler.drawerMenu(userId, replyToken)];
            case 35: return [2 /*return*/, Handler.sharePoint(replyToken)
                // return Handler.replyText(replyToken, `Redirect to SHARE pages.`)
            ];
            case 36: return [4 /*yield*/, Richmenu.nextPage(userId)];
            case 37:
                _b.sent();
                return [2 /*return*/, Handler.replyText(replyToken, "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E2B\u0E27\u0E15 \u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E19\u0E35\u0E49 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E2D\u0E48\u0E32\u0E19\u0E04\u0E33\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23")
                    //
                ];
            case 38: return [2 /*return*/, Handler.replyText(replyToken, "ECHO::" + message.text)];
        }
    });
}); };
//# sourceMappingURL=intentHandler.js.map