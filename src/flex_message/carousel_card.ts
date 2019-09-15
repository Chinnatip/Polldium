export const carousel = (title, contents) => {
  const columnGrid = contents.map(({ imgUrl, desc, title, actions }) => {
    return {
      thumbnailImageUrl: imgUrl,
      title: title,
      text: desc,
      actions: actions.map(({ label, text }) => {
        return {
          type: 'message',
          label,
          text
        }
      })
    }
  })

  return {
    type: 'template',
    altText: title,
    template: {
      type: 'carousel',
      actions: [],
      columns: columnGrid
    }
  }
}
