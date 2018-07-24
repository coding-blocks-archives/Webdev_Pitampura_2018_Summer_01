const route = require('express').Router()
const userCtrl = require('../controllers/user')

route.get('/', (req, res) => {
  res.render('signup', {alert: ''})
})

route.post('/', async (req, res) => {

  const createdUser = await userCtrl.createUser(
    req.body.email,
    req.body.password,
    req.body.name,
    req.body.age
  )

  if (!createdUser) {
    res.render('signup', {alert: 'Email id exists'})
  } else {
    res.redirect('/login')
  }

})

module.exports = route