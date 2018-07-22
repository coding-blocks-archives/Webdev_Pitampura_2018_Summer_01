const {db} = require('./db/models');
const app = require('./server');



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
