import * as line from '@line/bot-sdk'
import * as express from 'express'
import * as webhookHandler from './handler/webhook'
//
const config = require('../config.json')
const app = express()
const port = process.env.PORT || 3000
//
app.post('/webhook', line.middleware(config), webhookHandler)
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
