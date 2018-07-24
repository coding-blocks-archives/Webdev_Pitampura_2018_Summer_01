const route = require('express').Router()

route.get('/', (req, res) => {

  if (req.session && req.session.useremail) {
    res.redirect('/feed')
  } else {
    res.redirect('/news')
  }

})

module.exports = route