const route = require('express').Router()

route.get('/', (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err

    res.redirect('/login')
  })
})

module.exports = route