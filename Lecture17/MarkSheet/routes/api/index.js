const route = require('express').Router()

app.use('/students', require('./students'))
app.use('/exams', require('./exams'))
app.use('/subjects', require('./subjects'))
app.use('/papers', require('./papers'))

module.exports = route