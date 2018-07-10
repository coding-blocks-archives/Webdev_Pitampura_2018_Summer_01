const express = require('express');

const app = express();

app.use('/a', (req, res, next) => {
  console.log('running a')
  next()
})
app.use('/b', (req, res, next) => {
  console.log('running b')
  next()
})
app.use('/c', (req, res, next) => {
  console.log('running c')
  next()
})

app.get('/a/x', (req, res) => res.send('AAAAAA XXXXX'))

app.use((req, res) => res.send('NOTHING FOUND'))


app.listen(3333, function () {
    console.log("Server started on http://localhost:3333");
});