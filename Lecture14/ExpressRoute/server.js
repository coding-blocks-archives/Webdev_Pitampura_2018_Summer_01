const express = require('express');

const tasksRoute = require('./routes/tasks')
const notesRoute = require('./routes/notes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/tasks', tasksRoute)
app.use('/notes', notesRoute)
app.use('/', express.static(__dirname + '/public_static'))

app.listen(4444, function () {
    console.log("Server started on http://localhost:4444");
});