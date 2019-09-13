import * as Handler from './actionHandler'

export const intentHandler = async (message, replyToken) => {
  switch (message.text) {
    case '':
      return Handler.replyText(replyToken, `พิมพ์อะไรมาหน่อยซี่ ~~~`)
    case 'เริ่มทำโพลล์':
      return Handler.replyText(replyToken, `Let's go`)
    default:
      return Handler.replyText(replyToken, `ECHO::${message.text}`)
  }
}
