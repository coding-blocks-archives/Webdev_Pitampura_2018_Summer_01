const express = require('express')
const route = express.Router()

route.use('/students', require('./students'))
route.use('/exams', require('./exams'))
route.use('/subjects', require('./subjects'))
route.use('/papers', require('./papers'))

module.exports = route