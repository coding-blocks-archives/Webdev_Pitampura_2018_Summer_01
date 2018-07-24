const express = require('express');

const app = express();

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/news', require('./routes/news'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/feed', require('./routes/feed'));
app.use('/profile', require('./routes/profile'));
app.use('/', require('./routes/root'));


app.listen(3939, function () {
    console.log("Server started on http://localhost:3939");
});