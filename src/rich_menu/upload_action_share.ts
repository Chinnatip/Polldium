export const parcel = {
  imagePath: `./assets/action_share.jpg`, //change rich image
  name: 'Share', //set rich topic
  chatBarText: 'ขอบคุณที่โหวต', // [ MAX 14 letter! ] set menu title
  richTemplate: {
    width: 2500,
    height: 843
  },
  actions: [
    {
      text: 'เเชร์โพล์นี้',
      type: 'message',
      width: 1667,
      height: 843,
      x: 0,
      y: 0
    },
    {
      text: 'เลือกอ่านหัวข้ออื่น',
      type: 'message',
      width: 833,
      height: 843,
      x: 1668,
      y: 0
    }
  ]
}
