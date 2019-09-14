"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareCard = {
    type: 'flex',
    altText: 'Flex Message',
    contents: {
        type: 'bubble',
        body: {
            type: 'box',
            layout: 'vertical',
            spacing: 'md',
            contents: [
                {
                    type: 'text',
                    text: 'มาเป็นเพื่อนกับน้องรพี',
                    size: 'xl',
                    gravity: 'center',
                    weight: 'bold',
                    wrap: true
                },
                {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'sm',
                    margin: 'lg',
                    contents: [
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'LINE',
                                    flex: 1,
                                    size: 'sm',
                                    color: '#AAAAAA'
                                },
                                {
                                    type: 'text',
                                    text: '@258zuvzn',
                                    flex: 4,
                                    size: 'm',
                                    color: '#666666',
                                    wrap: true
                                }
                            ]
                        },
                        {
                            type: 'box',
                            layout: 'vertical',
                            margin: 'xxl',
                            contents: [
                                {
                                    type: 'spacer'
                                },
                                {
                                    type: 'image',
                                    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png',
                                    size: 'xl',
                                    aspectMode: 'cover'
                                },
                                {
                                    type: 'text',
                                    text: 'เเสกน QR CODE นี้ จากนั้นเเอดเป็นเพื่อนกับน้องรพี เพื่อสอบถามปัญหาด้านกฎหมาย',
                                    margin: 'xxl',
                                    size: 'xs',
                                    color: '#AAAAAA',
                                    wrap: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};
//# sourceMappingURL=sample.js.map