"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parcel = {
    imagePath: "./assets/action_listen_choose.jpg",
    name: 'List_choose',
    chatBarText: 'เลือกอ่านความเห็น',
    richTemplate: {
        width: 2500,
        height: 1686
    },
    actions: [
        {
            text: 'อ่านความเห็นฝ่ายที่เห็นด้วย',
            type: 'message',
            width: 1250,
            height: 1240,
            x: 0,
            y: 0
        },
        {
            text: 'อ่านความเห็นฝ่ายที่ไม่เห็นด้วย',
            type: 'message',
            width: 1250,
            height: 1240,
            x: 1251,
            y: 0
        },
        {
            text: 'ย้อนกลับไปหน้า drawer',
            type: 'message',
            width: 2500,
            height: 446,
            x: 0,
            y: 1240
        }
    ]
};
//# sourceMappingURL=upload_action_listen_choose.js.map