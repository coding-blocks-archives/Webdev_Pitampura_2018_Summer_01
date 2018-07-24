const route = require('express').Router()
const newsCtrl = require('../controllers/news')
route.get('/', async (req, res) => {

  res.render('news', {
    news: await newsCtrl.getPublicNews()
  })


})

module.exports = route