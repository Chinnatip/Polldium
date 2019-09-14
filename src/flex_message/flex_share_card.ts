export const shareCard = (title, lineID, linkURL, qrCode, endText) => {
  return {
    type: 'flex',
    altText: 'Flex Message',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'text',
            text: title,
            size: 'xl',
            gravity: 'center',
            weight: 'bold',
            wrap: true
          },
          {
            type: 'box',
            layout: 'vertical',
            spacing: 'sm',
            margin: 'lg',
            contents: [
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'LINE',
                    flex: 1,
                    size: 'sm',
                    color: '#AAAAAA'
                  },
                  {
                    type: 'text',
                    text: lineID,
                    flex: 4,
                    size: 'sm',
                    color: '#666666',
                    wrap: true
                  }
                ]
              },
              {
                type: 'box',
                layout: 'baseline',
                spacing: 'sm',
                contents: [
                  {
                    type: 'text',
                    text: 'URL',
                    flex: 1,
                    size: 'sm',
                    color: '#AAAAAA'
                  },
                  {
                    type: 'text',
                    text: linkURL,
                    flex: 4,
                    size: 'sm',
                    color: '#666666',
                    wrap: true
                  }
                ]
              },
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                contents: [
                  {
                    type: 'spacer'
                  },
                  {
                    type: 'image',
                    url: qrCode,
                    size: 'xl',
                    aspectMode: 'cover'
                  },
                  {
                    type: 'text',
                    text: endText,
                    margin: 'xxl',
                    size: 'xs',
                    color: '#AAAAAA',
                    wrap: true
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
