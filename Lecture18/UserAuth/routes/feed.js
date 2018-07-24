const route = require('express').Router()
const newsCtrl = require('../controllers/news')

route.get('/', async (req, res) => {

  res.render('feed', {feed: await newsCtrl.getPrivateFeed()})

})

module.exports = route