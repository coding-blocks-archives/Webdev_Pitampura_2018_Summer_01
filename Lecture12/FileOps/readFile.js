const fs = require('fs')

fs.readFile(
  __dirname + '/hello.txt',
  (err, data) => {
    if (err) throw err

    // data is a buffer, convert to string to print
    console.log(data.toString())
  }
)