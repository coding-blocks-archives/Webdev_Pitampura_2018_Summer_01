const https = require('https')
const fs = require('fs')

https.get(
  'https://codingblocks.com/assets/images/cb/cblogo.png',
  (res) => {
    res.setEncoding('binary')

    let image = ''

    res.on('data', (chunk) => {
      image += chunk
    })

    res.on('end', () => {
      fs.writeFile(
        __dirname + '/logo2.png',
        image,
        'binary',
        (err) => console.error(err)
      )
    })
  }
)