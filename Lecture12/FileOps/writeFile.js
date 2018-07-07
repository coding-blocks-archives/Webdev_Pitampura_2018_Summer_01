const fs = require('fs')

fs.writeFile(
  __dirname + '/hello.txt',
  'Hi there, this is some text',
  (err) => {
    if (err) throw err
  }
)