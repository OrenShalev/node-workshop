const express = require('express')
const fs = require('fs')

const app = express()

app.get('/hello', function(req, res) {
  res.set('Content-Type', 'text/plain')

// createReadStream() returns a stream object -- which can be piped.
  fs.createReadStream(__dirname + '/data/hello-world.txt').pipe(res)
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* pipe(res)
* mime.lookup (node-mime)
*/
