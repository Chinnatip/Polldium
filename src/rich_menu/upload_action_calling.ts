export const parcel = {
  imagePath: `./assets/action_calling.jpg`, //change rich image
  name: 'Calling', //set rich topic
  chatBarText: 'โทรหาเจ้าหน้าที่', //set menu title
  richTemplate: {
    width: 2500,
    height: 1686
  },
  actions: [
    {
      text: 'โทรหาสายด่วนกระทรวงยุติธรรม',
      type: 'message',
      width: 1250,
      height: 1686,
      x: 0,
      y: 0
    },
    {
      text: 'โทรหาศูนย์ดำรงธรรม',
      type: 'message',
      width: 1250,
      height: 1686,
      x: 1251,
      y: 0
    }
  ]
}
