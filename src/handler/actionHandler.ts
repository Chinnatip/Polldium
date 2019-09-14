const line = require('@line/bot-sdk')
const config = require('../../config.json')
const client = new line.Client(config)
import { intentHandler } from './intentHandler'
import * as Richmenu from '../rich_menu/menu'

// simple reply function
export const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts]
  return client.replyMessage(token, texts.map(text => ({ type: 'text', text })))
}

export const sharePoint = token => {
  return client.replyMessage(token, [
    {
      type: 'flex',
      altText: 'Share_group - flex message',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              style: 'primary',
              height: 'sm',
              action: {
                type: 'uri',
                label: 'Share Polldium',
                uri: 'https://line.me/ti/p/~@258zuvzn'
              }
            }
          ]
        }
      }
    }
  ])
}

export const handleText = (message, source, replyToken) => {
  return intentHandler(message, source, replyToken)
}

export const handleImage = (message, replyToken) => {
  console.log('get image >>>', message)
  return replyText(replyToken, 'Got Image')
}

export const handleVideo = (message, replyToken) => {
  console.log('get video >>>', message)
  return replyText(replyToken, 'Got Video')
}

export const handleAudio = (message, replyToken) => {
  console.log('get sound >>>', message)
  return replyText(replyToken, 'Got Audio')
}

export const handleLocation = (message, replyToken) => {
  console.log('get loc >>>', message)
  const { type, id, address, latitude, longitude } = message
  const compress = [
    `ตอนนี้คุณอยู่ที่ [${longitude},${latitude}] ${address}`,
    'call me now'
  ]
  return replyText(replyToken, compress)
}

export const handleSticker = (message, replyToken) => {
  console.log('get sticker >>>', message)
  return replyText(replyToken, 'Got Sticker')
}

// Customize action
export const drawerMenu = async (userId, replyToken) => {
  return await Richmenu.drawer(userId)
}
