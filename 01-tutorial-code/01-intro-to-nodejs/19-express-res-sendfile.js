const express = require('express')

const app = express()

// Express includes mime, sends relevant headers accroding to file extension.
app.get('/hello', function(req, res) {
  res.sendFile(__dirname + '/data/hello-world.txt')
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* res.sendFile
* mime.lookup (node-mime)
*/
