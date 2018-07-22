const express = require('express');
const {db} = require('./db/models')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/api'));

(async () => {
  try {
    await db.sync()
    app.listen(7373, function () {
      console.log("Server started on http://localhost:7373");
    });
  } catch (e) {
    console.error("Problem creating database")
    console.error(err)  }
})()
