#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_action_share_1 = require("./upload_action_share");
var config = require('../../config.json');
var program = require('commander');
var line = require('@line/bot-sdk');
var fs = require('fs');
var client = new line.Client(config);
program
    .version('0.1.0')
    .option('-d, --delete-all', 'Delete all existed rich menu')
    .parse(process.argv);
var housekeeping = Promise.resolve();
if (program.deleteAll) {
    housekeeping = client
        .getRichMenuList()
        // eslint-disable-next-line max-len
        .then(function (output) {
        return Promise.all(output.map(function (richMenuItem) {
            return client.deleteRichMenu(richMenuItem.richMenuId);
        }));
    });
}
var name = upload_action_share_1.parcel.name, chatBarText = upload_action_share_1.parcel.chatBarText, imagePath = upload_action_share_1.parcel.imagePath, _a = upload_action_share_1.parcel.richTemplate, templateWidth = _a.width, templateHeight = _a.height, 
// richGrid: { width, height },
actions = upload_action_share_1.parcel.actions;
housekeeping
    .then(function () {
    return client.createRichMenu({
        name: name,
        chatBarText: chatBarText,
        selected: true,
        size: {
            width: templateWidth,
            height: templateHeight
        },
        areas: actions.map(function (_a) {
            var x = _a.x, y = _a.y, text = _a.text, type = _a.type, width = _a.width, height = _a.height;
            return {
                bounds: {
                    x: x,
                    y: y,
                    width: width,
                    height: height
                },
                action: {
                    text: text,
                    type: type
                }
            };
        })
    });
})
    .then(function (richMenuId) {
    console.log("richMenuId >> " + richMenuId);
    return client.setRichMenuImage(richMenuId, fs.createReadStream(imagePath));
})
    .catch(function (error) { return console.log(error.originalError.response.data, error); });
// .catch(error => console.log(error))
//# sourceMappingURL=uploader.js.map