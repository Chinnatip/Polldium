'use strict'

import * as line from '@line/bot-sdk'
import * as express from 'express'
import { handleEvent } from './handleEvent'
//
const config = require('../config.json')
const app = express()

// webhook callback
app.post('/webhook', line.middleware(config), (req, res) => {
  const {
    body: { events }
  } = req
  // req.body.events should be an array of events
  if (!Array.isArray(events)) {
    return res.status(500).end()
  }
  // handle events separately
  Promise.all(
    events.map(event => {
      // LINE VERIFY Webhook event
      const { replyToken } = event
      if (
        replyToken === '00000000000000000000000000000000' ||
        replyToken === 'ffffffffffffffffffffffffffffffff'
      ) {
        return
      }
      return handleEvent(event)
    })
  )
    .then(() => res.end())
    .catch(err => {
      console.error(err)
      res.status(500).end()
    })
})

const port = config.port
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
