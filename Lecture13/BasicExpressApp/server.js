// run `npm i express` before this
const express = require('express')
const app = express()

// 'app' is our server

app.get(
  '/',
  (req, res) => {
    res.send('<h1>Hello World</h1>')
  }
)

app.get(
  '/search',
  (req, res) => {

    if (typeof req.query['q'] === 'undefined') {
      req.query['q'] = 'nothing'
    }
    if (typeof req.query['p'] === 'undefined') {
      req.query['p'] = 'nowhere'
    }

    res.send(`
Are you looking for ${req.query['q']} 
in ${req.query['p']}?
    `)
  }
)

app.listen(
  2222,
  () => console.log(`Server has started
    http://localhost:2222
    http://127.0.0.1:2222
    http://0.0.0.0:2222
  `)
)