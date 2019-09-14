import * as Handler from './actionHandler'
import * as Richmenu from '../rich_menu/menu'
import { elonMuskContent } from '../content/elon_mush'

export const intentHandler = async (message, source, replyToken) => {
  const { userId } = source
  switch (message.text) {
    case '':
      return Handler.replyText(replyToken, `พิมพ์อะไรมาหน่อยซี่ ~~~`)

    // Opening action
    case 'เริ่มทำโพลล์':
      await Richmenu.nextPage(userId)
      return Handler.replyText(
        replyToken,
        `เลือกโหวต หรือทำความเข้าใจหัวข้อนี้ โดยการเลือก อ่านคำให้การ`
      )

    // Topic
    case 'รัฐธรรมนูญปี60':
      return Handler.replyText(replyToken, [
        'สรุปการดีเบต แจ็ก หม่า vs อีลอน มัสก์ ในงานประชุม World AI / โดย ลงทุนแมน ลงทุนแมนรับรองว่าเป็นเรื่องน่าสนใจที่สุดในช่วงนี้ เมื่อไม่กี่ชั่วโมงที่ผ่านมา มีการคุยกัน'
      ])
    // return Handler.drawerMenu(userId, replyToken)
    case 'โรงไฟฟ้าถ่านหิน':
      return Handler.drawerMenu(userId, replyToken)
    case 'เสรีภาพทางเพศ':
      return Handler.drawerMenu(userId, replyToken)
    case 'ไมโครพลาสติค':
      return Handler.drawerMenu(userId, replyToken)
    case 'การค้าเสรี':
      return Handler.drawerMenu(userId, replyToken)

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
    case 'ปิดเมนู':
      return await Richmenu.removePage(userId)
    case 'โหวตเห็นด้วย':
      return await Richmenu.sharePage(userId)
    case 'โหวตไม่เห็นด้วย':
      return await Richmenu.sharePage(userId)
    case 'ย้อนกลับไปหน้า drawer':
      return Handler.drawerMenu(userId, replyToken)
    case 'เเชร์โพล์นี้':
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
