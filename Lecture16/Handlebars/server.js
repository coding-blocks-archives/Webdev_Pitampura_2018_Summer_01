const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "hbs")
let todos = [
  {task: 'first task'},
  {task: 'second task'}
]
// let todos ["task one", "task two"]

app.use('/public', express.static(__dirname + '/public_static'))

app.get('/', (req, res) => {
  res.render('main', {
    todos
  })
})

app.post('/', (req, res) => {
  todos.push({task: req.body.task})
  res.redirect('/')
})

app.post('/api/todos', (req, res) => {
  todos.push({task: req.body.task})
  res.send(todos)
})

app.listen(5454, function () {
    console.log("Server started on http://localhost:5454");
});