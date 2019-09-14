"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require('../../config.json');
var request = require('request-promise');
exports.nextPage = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_topic,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.listenChoose = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_listen_choose,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.listenAgree = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_listen_agree,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.readMore = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_read_more,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.back = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_back,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.votePage = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_vote,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.sharePage = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_share,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.drawer = function (userId) {
    return request({
        method: 'POST',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu/richmenu-" + config.rich_menu_action_drawer,
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
exports.removePage = function (userId) {
    return request({
        method: 'DELETE',
        uri: "https://api.line.me/v2/bot/user/" + userId + "/richmenu",
        headers: {
            Authorization: "Bearer " + config.channelAccessToken
        },
        json: true
    });
};
//# sourceMappingURL=menu.js.map