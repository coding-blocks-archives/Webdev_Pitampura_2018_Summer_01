const express = require('express')
const route = express.Router()

const tasks = [
  'task one',
  'task two'
]

route.get('/', (req, res) => res.send(tasks))

route.post('/', (req, res) => {
  tasks.push(req.body.task)
  res.redirect(req.originalUrl)
})

module.exports = route