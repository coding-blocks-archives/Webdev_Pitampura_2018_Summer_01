const http = require('http')

http.get('http://example.com', (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString())
  })
  res.on('end', () => {
    console.log('DATA DOWNLOADED')
  })
})