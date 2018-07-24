const route = require('express').Router()
const userCtrl = require('../controllers/user')

route.get('/', async (req, res) => {
  const user = userCtrl.getUser()

  res.render('profile', {
    user: {
      name: user.name,
      age: user.age
    }
  })

})

module.exports = route