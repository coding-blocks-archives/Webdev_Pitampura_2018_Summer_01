const fs = require('fs')
const resize = require('resize-img')

// First npm install resize-img

fs.readFile(
  __dirname + '/cblogo.png',
  (err, data) => {
    if (err) throw err

    // 'data' is the buffer of logo original png

    resize(data, {width: 100, height: 50})
      .then((buff) => {

        // .then() runs after resizing asynchronously
        // buff here is the buffer of modified image
        fs.writeFile(
          __dirname + '/smalllogo.png',
          buff,
          (err) => {
            if (err) throw err

            // Now resized file has been saved
            console.log('DONE')
          }
        )
      })
  }
)