const line = require('@line/bot-sdk')
const config = require('../../config.json')
const client = new line.Client(config)
import { intentHandler } from './intentHandler'

// simple reply function
export const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts]
  return client.replyMessage(token, texts.map(text => ({ type: 'text', text })))
}

export const handleText = (message, replyToken) => {
  return intentHandler(message, replyToken)
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
