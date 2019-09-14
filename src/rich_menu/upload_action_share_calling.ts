export const parcel = {
  imagePath: `./assets/action_share_calling.jpg`, //change rich image
  name: 'Share', //set rich topic
  chatBarText: 'จบการอ่าน', // [ MAX 14 letter! ] set menu title
  richTemplate: {
    width: 2500,
    height: 843
  },
  actions: [
    {
      text: 'ย้อนกลับไปหน้าแรก',
      type: 'message',
      width: 833,
      height: 843,
      x: 0,
      y: 0
    },
    {
      text: 'เเชร์น้องรพี',
      type: 'message',
      width: 1667,
      height: 843,
      x: 834,
      y: 0
    }
  ]
}
