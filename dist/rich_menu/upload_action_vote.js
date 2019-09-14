"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parcel = {
    imagePath: "./assets/action_vote.jpg",
    name: 'Vote now',
    chatBarText: 'โหวตเลย',
    richTemplate: {
        width: 2500,
        height: 1686
    },
    actions: [
        {
            text: 'โหวตเห็นด้วย',
            type: 'message',
            width: 1250,
            height: 1240,
            x: 0,
            y: 0
        },
        {
            text: 'โหวตไม่เห็นด้วย',
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
//# sourceMappingURL=upload_action_vote.js.map