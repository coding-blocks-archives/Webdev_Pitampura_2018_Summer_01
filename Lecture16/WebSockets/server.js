const express = require('express');
const socketio = require('socket.io');
const http = require('http')

const app = express(); // creates express app
const server = http.Server(app) //creates http server using the app
const io = socketio(server) //adds a socket on above server

app.use('/', express.static(__dirname + '/public_static'))

io.on('connection', (socket) => {
  // all code here runs in the scope
  // of a single socket

  console.log('socket connected ' + socket.id)

  socket.on('SEND', (data) => {

    io.emit('RECV', data)

  })

})

server.listen(5656, function () {
  console.log("Server started on http://localhost:5656");
});