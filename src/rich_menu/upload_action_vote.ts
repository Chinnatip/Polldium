export const parcel = {
  imagePath: `./assets/action_vote.jpg`, //change rich image
  name: 'Vote now', //set rich topic
  chatBarText: 'โหวตเลย', //set menu title
  richTemplate: {
    width: 2500,
    height: 1686
  },
  actions: [
    {
      text: 'โหวตเห็นด้วย',
      type: 'message',
      width: 1250,
      height: 1240,
      x: 0,
      y: 0
    },
    {
      text: 'โหวตไม่เห็นด้วย',
      type: 'message',
      width: 1250,
      height: 1240,
      x: 1251,
      y: 0
    },
    {
      text: 'ย้อนกลับไปหน้า drawer',
      type: 'message',
      width: 2500,
      height: 446,
      x: 0,
      y: 1240
    }
  ]
}
