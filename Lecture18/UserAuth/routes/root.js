const route = require('express').Router()

route.get('/', (req, res) => {

  if (true /* if user is logged in*/) {

    res.redirect('/feed')

  } else {
    res.redirect('/news')
  }

})

module.exports = route