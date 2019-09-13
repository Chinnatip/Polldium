import { handleEvent } from './handleEvent'

// Webhook engine
const webhook = (req, res) => {
  const {
    body: { events }
  } = req
  console.log(`User id: ${events[0].source.userId}`)
  res.json({ status: 'ok' })
  return Promise.all(events.map(handleEvent)).catch(e => {
    console.log(e)
  })
}

module.exports = webhook
