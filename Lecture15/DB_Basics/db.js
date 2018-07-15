const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/test.db'
})

const Todo = db.define('todo', {
  task: DataTypes.STRING,
  done: DataTypes.BOOLEAN
})
db.sync()
  .then(() => {

    Todo.create({
      task: 'somet task',
      done: false
    })


  })
  .catch((err) => console.error(err))
