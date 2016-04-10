const express = require('express')

// express is a function that returns "instances" -- factory.
const app = express()

// Define handlers for method-url combos. Order matters.
app.get('/hello', function(req, res) {
  res.send('hello')
})
app.get('/world', function(req, res) {
  res.send('world')
})
app.get('/close', function(req, res) {
  res.send('goodbye')
  server.close()
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* Express
* app.get
* res.send
*/