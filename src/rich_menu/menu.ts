const config = require('../../config.json')
const request = require('request-promise')

export const nextPage = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_topic}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const listenChoose = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_listen_choose}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const listenAgree = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_listen_agree}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const readMore = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_read_more}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const back = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_back}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const votePage = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_vote}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const sharePage = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_share}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const drawer = userId =>
  request({
    method: 'POST',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu/richmenu-${config.rich_menu_action_drawer}`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })

export const removePage = userId =>
  request({
    method: 'DELETE',
    uri: `https://api.line.me/v2/bot/user/${userId}/richmenu`,
    headers: {
      Authorization: `Bearer ${config.channelAccessToken}`
    },
    json: true
  })
