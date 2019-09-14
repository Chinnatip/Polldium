#!/usr/bin/env node
import { parcel } from './upload_action_listen_agree'
const config = require('../../config.json')
const program = require('commander')
const line = require('@line/bot-sdk')
const fs = require('fs')
const client = new line.Client(config)

program
  .version('0.1.0')
  .option('-d, --delete-all', 'Delete all existed rich menu')
  .parse(process.argv)

let housekeeping = Promise.resolve()

if (program.deleteAll) {
  housekeeping = client
    .getRichMenuList()
    // eslint-disable-next-line max-len
    .then(output =>
      Promise.all(
        output.map(richMenuItem =>
          client.deleteRichMenu(richMenuItem.richMenuId)
        )
      )
    )
}

const {
  name,
  chatBarText,
  imagePath,
  richTemplate: { width: templateWidth, height: templateHeight },
  // richGrid: { width, height },
  actions
} = parcel

housekeeping
  .then(() =>
    client.createRichMenu({
      name,
      chatBarText,
      selected: true,
      size: {
        width: templateWidth,
        height: templateHeight
      },
      areas: actions.map(({ x, y, text, type, width, height }) => {
        return {
          bounds: {
            x,
            y,
            width,
            height
          },
          action: {
            text,
            type
          }
        }
      })
    })
  )
  .then(richMenuId => {
    console.log(`richMenuId >> ${richMenuId}`)
    return client.setRichMenuImage(richMenuId, fs.createReadStream(imagePath))
  })
  .catch(error => console.log(error.originalError.response.data, error))
// .catch(error => console.log(error))
