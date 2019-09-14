import * as Handler from './actionHandler'
import * as Richmenu from '../rich_menu/menu'
import { elonMuskContent } from '../content/elon_mush'

export const intentHandler = async (message, source, replyToken) => {
  const { userId } = source
  switch (message.text) {
    case '':
      return Handler.replyText(replyToken, `พิมพ์อะไรมาหน่อยซี่ ~~~`)

    // Opening action
    case 'ความรู้ด้านกฎหมาย':
      await Richmenu.topic(userId)
      return Handler.replyText(
        replyToken,
        `เลือกหัวข้อที่ต้องการศึกษาได้เลยครับ`
      )
    case 'ติดต่อเจ้าหน้าที่':
      await Richmenu.calling(userId)
      return Handler.replyText(replyToken, `เลือกเบอร์ติดต่อเจ้าหน้าที่`)

    // Calling
    case 'โทรหาสายด่วนกระทรวงยุติธรรม':
      await Richmenu.shareCallingPage(userId)
      return Handler.calling(replyToken, 1111)
    case 'โทรหาศูนย์ดำรงธรรม':
      await Richmenu.shareCallingPage(userId)
      return Handler.calling(replyToken, 1567)
    case 'โทรหาสภาทนายความ':
      await Richmenu.shareCallingPage(userId)
      return Handler.callingLawyer(replyToken)

    // Topic
    case 'ปัญหาโดนโกง':
      await Richmenu.sharePage(userId)
      return Handler.replyText(replyToken, `ปัญหาโดนโกง`)
    case 'ปํญหาการกู้ยืม':
      await Richmenu.sharePage(userId)
      return Handler.replyText(replyToken, `ปํญหาการกู้ยืม`)
    case 'ปัญหาการประกันตัว':
      await Richmenu.sharePage(userId)
      return Handler.replyText(replyToken, `ปัญหาการประกันตัว`)
    case 'ปัญหาอุบัติเหตุ':
      await Richmenu.sharePage(userId)
      return Handler.replyText(replyToken, `ปัญหาอุบัติเหตุ`)
    case 'ศึกษากฎหมายใหม่':
      await Richmenu.sharePage(userId)
      return Handler.replyText(replyToken, `ศึกษากฎหมายใหม่`)

    // Drawer
    case 'โหวตเลย':
      await Richmenu.votePage(userId)
      return Handler.replyText(replyToken, `OK`)
    case 'อ่านคำให้การ':
      return await Richmenu.listenChoose(userId)
    case 'เขียนคำให้การ':
      return await Richmenu.removePage(userId)

    // Listen choose
    case 'อ่านความเห็นฝ่ายที่เห็นด้วย':
      return await Richmenu.listenAgree(userId)
    case 'อ่านความเห็นฝ่ายที่ไม่เห็นด้วย':
      return await Richmenu.listenAgree(userId)

    // Listen agree
    case 'ภาพรวมของเนื้อหา':
      return await Richmenu.readMore(userId)
    case 'ข้อมูลหลักฐานที่เกี่ยวข้อง':
      return await Richmenu.readMore(userId)
    case 'เสียงของคนที่เห็นด้วย':
      return await Richmenu.readMore(userId)
    case 'ย้อนกลับไปหน้า ความคิดเห็น':
      return await Richmenu.listenChoose(userId)

    // Read more
    case 'อ่านต่อ':
      return await Richmenu.back(userId)
    case 'ย้อนกลับไปอ่านข้ออื่น':
      return await Richmenu.listenAgree(userId)

    // Close ,Back or Share action
    case 'ย้อนกลับไปหน้าหัวข้อ':
      return await Richmenu.topic(userId)
    case 'ย้อนกลับไปหน้าแรก':
      return await Richmenu.removePage(userId)
    case 'ย้อนกลับไปหน้าเเรก':
      return await Richmenu.removePage(userId)
    case 'ปิดเมนู':
      return await Richmenu.removePage(userId)
    case 'โหวตเห็นด้วย':
      return await Richmenu.sharePage(userId)
    case 'โหวตไม่เห็นด้วย':
      return await Richmenu.sharePage(userId)
    case 'ย้อนกลับไปหน้า drawer':
      return Handler.drawerMenu(userId, replyToken)
    case 'เเชร์บทความนี้':
      return Handler.sharePoint(replyToken)
    case 'เเชร์น้องรพี':
      return Handler.sharePoint(replyToken)
    // return Handler.replyText(replyToken, `Redirect to SHARE pages.`)
    case 'เลือกอ่านหัวข้ออื่น':
      await Richmenu.nextPage(userId)
      return Handler.replyText(
        replyToken,
        `เลือกโหวต หรือทำความเข้าใจหัวข้อนี้ โดยการเลือก อ่านคำให้การ`
      )
    //
    default:
      return Handler.replyText(replyToken, `ECHO::${message.text}`)
  }
}
