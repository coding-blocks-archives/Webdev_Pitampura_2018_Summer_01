const express = require('express');

const app = express();
app.set("view engine", "hbs")

app.get('/', (req, res) => {
  res.render('main', {body: 'Hello World'})
})


app.listen(5454, function () {
    console.log("Server started on http://localhost:5454");
});