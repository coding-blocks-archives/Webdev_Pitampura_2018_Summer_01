const express = require('express');
const session = require('express-session')

const app = express();

app.set('view engine', 'hbs')

app.use((req, res, next) => {
  console.log('========== SESSION =========')
  console.log(req.session) //session unavailable before session middleware
  console.log(req.headers) // cookies are there in header although
  next()
})
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'something very very secret'
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/news', require('./routes/news'));
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/feed', require('./routes/feed'));
app.use('/profile', require('./routes/profile'));
app.use('/', require('./routes/root'));


app.listen(3939, function () {
    console.log("Server started on http://localhost:3939");
});