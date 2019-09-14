"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flex_calling = function (caller) {
    var cover = caller == 1567
        ? 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg1567.png'
        : 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg1111.png';
    var content = caller == 1567
        ? { label: 'โทรสายตรง 1567', uri: 'tel:1567' }
        : { label: 'โทรสายตรง 1111', uri: 'tel:1111' };
    return {
        type: 'flex',
        altText: 'Flex Message',
        contents: {
            type: 'bubble',
            hero: {
                type: 'image',
                url: cover,
                size: 'full',
                aspectRatio: '20:13',
                aspectMode: 'cover'
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                    {
                        type: 'button',
                        action: {
                            type: 'uri',
                            label: content.label,
                            uri: content.uri
                        },
                        style: 'primary'
                    }
                ]
            }
        }
    };
};
exports.flex_calling_lawyer = function (branch, telNumber) {
    var cover = 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg_lawer.png';
    var content = {
        label: "\u0E2A\u0E20\u0E32\u0E17\u0E19\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21 " + branch,
        uri: "tel:" + telNumber
    };
    return {
        type: 'flex',
        altText: 'Flex Message',
        contents: {
            type: 'bubble',
            hero: {
                type: 'image',
                url: cover,
                size: 'full',
                aspectRatio: '20:13',
                aspectMode: 'cover'
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                contents: [
                    {
                        type: 'button',
                        action: {
                            type: 'uri',
                            label: content.label,
                            uri: content.uri
                        },
                        style: 'primary'
                    }
                ]
            }
        }
    };
};
//# sourceMappingURL=flex_calling.js.map