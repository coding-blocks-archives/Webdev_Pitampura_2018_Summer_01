const express = require('express');
const {db} = require('./db/models')


const app = express();

app.use('/api', require('./routes/api'))


db.sync()
  .then(() => {
    app.listen(7373, function () {
      console.log("Server started on http://localhost:7373");
    });
  })
  .catch((err) => {
    console.error("Problem creating database")
    console.error(err)
  })


