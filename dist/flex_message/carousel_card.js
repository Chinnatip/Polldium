"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carousel = function (title, contents) {
    var columnGrid = contents.map(function (_a) {
        var imgUrl = _a.imgUrl, desc = _a.desc, title = _a.title, actions = _a.actions;
        return {
            thumbnailImageUrl: imgUrl,
            title: title,
            text: desc,
            actions: actions.map(function (_a) {
                var label = _a.label, text = _a.text;
                return {
                    type: 'message',
                    label: label,
                    text: text
                };
            })
        };
    });
    return {
        type: 'template',
        altText: title,
        template: {
            type: 'carousel',
            actions: [],
            columns: columnGrid
        }
    };
};
//# sourceMappingURL=carousel_card.js.map