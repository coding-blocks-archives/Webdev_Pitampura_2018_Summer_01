const route = require('express').Router()
const userCtrl = require('../controllers/user')

route.get('/', async (req, res) => {
  if (req.session && req.session.useremail) {
    const user = await userCtrl.getUser(req.session.useremail)

    return res.render('profile', {
      user: {
        name: user.name,
        age: user.age,
        email: req.session.useremail
      }
    })
  } else {
    res.redirect('/login')
  }


})

module.exports = route