const express = require('express')

const app = express()

app.get('/mult', function(req, res) {
  res.send((parseInt(req.query.a) * parseInt(req.query.b)).toString())
})

// For the tests.
module.exports = app

// Exposing our server MODULE as a STANDALONE -- if this module is the "main".
if (require.main === module) {
  const portToListenTo = process.env.PORT || 3000

  app.listen(portToListenTo, function() {
    console.log(`Listening on ${portToListenTo}...`)
  })
}

