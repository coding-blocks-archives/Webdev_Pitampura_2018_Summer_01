const app = require('express')()

const todos = ["one task", "two task"]

app.get('/', (req, res) => res.send(`
<form action="/addtodo">
  <input name="newtodo">
  <input type="submit">
</form>
<ul>
  <li>
  ${todos.join('</li><li>')}
  </li>
</ul>
`))

app.get('/addtodo', (req, res) => {
  todos.push(req.query['newtodo'])
  res.redirect('/')
})


app.listen(3232, () => console.log(`
Server started on http://localhost:3232
`))