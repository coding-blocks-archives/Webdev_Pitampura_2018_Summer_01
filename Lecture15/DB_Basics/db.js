const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/test.db',
})

const Todo = db.define('todo', {
  task: DataTypes.STRING,
  done: DataTypes.BOOLEAN
})
db.sync()
  .then(() => {

    // Todo.create({
    //   task: 'somet task',
    //   done: false
    // })


    // Todo.findAll({
    //   where: {done: false}
    // }).then((todos) => {
    //   todos.forEach((todo) => console.log(todo.task))
    // })

    Todo.findById(4).then((todo) => {
      console.log(todo)
      todo.done = !todo.done
      todo.destroy()
    })



  })
  .catch((err) => console.error(err))
