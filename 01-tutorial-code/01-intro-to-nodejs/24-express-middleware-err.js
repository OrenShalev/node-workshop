const express = require('express')
const fs = require('fs')
const os = require('os')

const app = express()

app.get('/error', function(req, res) {
  throw new Error('Hello, world')
})

// If 4 params, then the 1st is err which was thrown earlier in the chain.
app.use(function(err, req, res, next) {
  res.send(err.message)
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* error middleware
*/
