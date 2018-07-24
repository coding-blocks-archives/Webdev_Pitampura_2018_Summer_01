const route = require('express').Router()
const newsCtrl = require('../controllers/news')

route.get('/', async (req, res) => {
  if (req.session && req.session.useremail) {
    return res.render('feed', {feed: await newsCtrl.getPrivateFeed()})
  } else {
    res.redirect('/login')
  }

})

module.exports = route