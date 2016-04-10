const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware: use bodyParser before the POST handler. It reads the request and does something to it, in this case set req.body.
// The middleware passed as param to use() should be a function, so bodyParser.something(...) returns a function. 
app.use(bodyParser.urlencoded({extended: true}))

app.post('/add', function(req, res) {
  res.send((parseInt(req.body.a) + parseInt(req.body.b)).toString())
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* curl 'http://localhost:3000/add' -X POST -d 'a=4' -d 'b=5'
* middleware
* bodyParser.urlencoded
*/
