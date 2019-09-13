import * as Handler from './handler'

// callback function to handle a single event
export function handleEvent(event) {
  const { type, message, postback, beacon, source, replyToken } = event
  switch (type) {
    case 'message':
      switch (message.type) {
        case 'text':
          return Handler.handleText(message, replyToken)
        case 'image':
          return Handler.handleImage(message, replyToken)
        case 'video':
          return Handler.handleVideo(message, replyToken)
        case 'audio':
          return Handler.handleAudio(message, replyToken)
        case 'location':
          return Handler.handleLocation(message, replyToken)
        case 'sticker':
          return Handler.handleSticker(message, replyToken)
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`)
      }
    case 'follow':
      return Handler.replyText(replyToken, 'Got followed event')

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`)

    case 'join':
      const { type } = source
      return Handler.replyText(replyToken, `Joined ${type}`)

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`)

    case 'postback':
      const { data } = postback
      return Handler.replyText(replyToken, `Got postback: ${data}`)

    case 'beacon':
      const { type: beaconType, dm: beaconDm, hwid } = beacon
      const dm = `${Buffer.from(beaconDm || '', 'hex').toString('utf8')}`
      return Handler.replyText(
        replyToken,
        `${beaconType} beacon hwid : ${hwid} with device message = ${dm}`
      )
    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`)
  }
}
