export const flex_calling = caller => {
  const cover =
    caller == 1567
      ? 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg1567.png'
      : 'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg1111.png'
  const content =
    caller == 1567
      ? { label: 'โทรสายตรง 1567', uri: 'tel:1567' }
      : { label: 'โทรสายตรง 1111', uri: 'tel:1111' }
  return {
    type: 'flex',
    altText: 'Flex Message',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: cover,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: content.label,
              uri: content.uri
            },
            style: 'primary'
          }
        ]
      }
    }
  }
}

export const flex_calling_lawyer = (branch, telNumber) => {
  const cover =
    'https://nong-rapee-chatbot.s3-ap-southeast-1.amazonaws.com/assets/bg_lawer.png'
  const content = {
    label: `สภาทนายความ ${branch}`,
    uri: `tel:${telNumber}`
  }
  return {
    type: 'flex',
    altText: 'Flex Message',
    contents: {
      type: 'bubble',
      hero: {
        type: 'image',
        url: cover,
        size: 'full',
        aspectRatio: '20:13',
        aspectMode: 'cover'
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        spacing: 'sm',
        contents: [
          {
            type: 'button',
            action: {
              type: 'uri',
              label: content.label,
              uri: content.uri
            },
            style: 'primary'
          }
        ]
      }
    }
  }
}
