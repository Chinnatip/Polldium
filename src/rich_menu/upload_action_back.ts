export const parcel = {
  imagePath: `./assets/action_back.jpg`, //change rich image
  name: 'Back', //set rich topic
  chatBarText: 'ข้อมูลหมดเเล้ว', // [ MAX 14 letter! ] set menu title
  richTemplate: {
    width: 2500,
    height: 843
  },
  actions: [
    {
      text: 'ย้อนกลับไปอ่านข้ออื่น',
      type: 'message',
      width: 833,
      height: 843,
      x: 0,
      y: 0
    },
    {
      text: 'โหวตเลย',
      type: 'message',
      width: 1677,
      height: 843,
      x: 834,
      y: 0
    }
  ]
}
