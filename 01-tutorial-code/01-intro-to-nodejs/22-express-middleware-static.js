const express = require('express')
const fs = require('fs')

const app = express()

// Serving static files from filesystem.
// if URL is "/abc.txt", sends "__dirname/data/abc.txt".
app.use('/', express.static(__dirname + '/data'))

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* express.static
*/
