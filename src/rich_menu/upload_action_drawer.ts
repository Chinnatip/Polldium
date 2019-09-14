export const parcel = {
  imagePath: `./assets/action_drawer.jpg`, //change rich image
  name: 'Vote now', //set rich topic
  chatBarText: 'โหวตเลย', //set menu title
  richTemplate: {
    width: 2500,
    height: 1686
  },
  actions: [
    {
      text: 'โหวตเลย',
      type: 'message',
      width: 1677,
      height: 1686,
      x: 0,
      y: 0
    },
    {
      text: 'อ่านคำให้การ',
      type: 'message',
      width: 833,
      height: 843,
      x: 1677,
      y: 0
    },
    {
      text: 'เขียนคำให้การ',
      type: 'message',
      width: 833,
      height: 843,
      x: 1667,
      y: 843
    }
  ]
}
