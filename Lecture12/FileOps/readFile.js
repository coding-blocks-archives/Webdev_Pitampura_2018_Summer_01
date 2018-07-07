const fs = require('fs')

fs.readFile(
  __dirname + '/hello.txt',
  (err, data) => {
    if (err) throw err

    console.log(data.toString())
  }
)