const express = require('express')
const route = express.Router()

const notes = [
  'first note',
  'second note'
]

route.get('/', (req, res) => res.send(notes))

route.post('/', (req, res) => {
  notes.push(req.body.note)
  res.redirect(req.originalUrl)
})

module.exports = route