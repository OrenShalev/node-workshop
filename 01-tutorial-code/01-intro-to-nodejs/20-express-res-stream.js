const express = require('express')

const app = express()

// Lower-level control over sending responses.
app.get('/hello', function(req, res) {
  res.set('Content-Type', 'text/plain')
  
  // write() doesn't actually writes, just sends it away...
  // end() notifies that the stream can be closed after everything sent before is written.
  res.write('Hello, ')
  res.write('world')
  res.end()
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* res as a stream
* res.set
*/
