const https = require('https')

https.get(
  'https://codingblocks.com/assets/images/cb/cblogo.png',
  (res) => {

    res.on('data', (chunk) => {
      console.log(chunk)
    })
  }
)