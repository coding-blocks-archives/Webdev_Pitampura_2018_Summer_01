const express = require('express');

const app = express();

function m1 (req, res, next) {
  console.log("running middleware 1")
  next()
}
function m2 (req, res, next) {
  console.log("running middleware 2")
  next()
}
function m3 (req, res, next) {
  if (req.originalUrl.startsWith('/secret')) {
    return res.send('Unauthorized')
  }
  console.log("running middleware 3")
  next()
}
function m4 (req, res, next) {
  console.log("running middleware 4")
  res.send('All middlewares over')
}

app.use(m1)
app.use(m2)
app.use(m3)
app.use(m4)

app.listen(3344, function () {
  console.log("Server started on http://localhost:3344");
});