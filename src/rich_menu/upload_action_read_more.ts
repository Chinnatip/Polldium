export const parcel = {
  imagePath: `./assets/action_read_more.jpg`, //change rich image
  name: 'Read more', //set rich topic
  chatBarText: 'อ่านต่อไหม', // [ MAX 14 letter! ] set menu title
  richTemplate: {
    width: 2500,
    height: 843
  },
  actions: [
    {
      text: 'อ่านต่อ',
      type: 'message',
      width: 1667,
      height: 843,
      x: 0,
      y: 0
    },
    {
      text: 'ย้อนกลับไปอ่านข้ออื่น',
      type: 'message',
      width: 833,
      height: 843,
      x: 1668,
      y: 0
    }
  ]
}
