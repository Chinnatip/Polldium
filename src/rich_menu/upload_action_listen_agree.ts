export const parcel = {
  imagePath: `./assets/action_listen_agree.jpg`, //change rich image
  name: 'List_agree', //set rich topic
  chatBarText: 'เลือกลำดับการอ่าน', //set menu title
  richTemplate: {
    width: 2500,
    height: 1686
  },
  actions: [
    {
      text: 'ภาพรวมของเนื้อหา',
      type: 'message',
      width: 833,
      height: 1240,
      x: 0,
      y: 0
    },
    {
      text: 'ข้อมูลหลักฐานที่เกี่ยวข้อง',
      type: 'message',
      width: 833,
      height: 1240,
      x: 833,
      y: 0
    },
    {
      text: 'เสียงของคนที่เห็นด้วย',
      type: 'message',
      width: 833,
      height: 1240,
      x: 1677,
      y: 0
    },
    {
      text: 'ย้อนกลับไปหน้า ความคิดเห็น',
      type: 'message',
      width: 1250,
      height: 466,
      x: 0,
      y: 1240
    },
    {
      text: 'โหวตเลย',
      type: 'message',
      width: 1250,
      height: 466,
      x: 1250,
      y: 1240
    }
  ]
}
