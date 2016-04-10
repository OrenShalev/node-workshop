const express = require('express')
const fs = require('fs')

const app = express()

// app.set configures the Express app.
// Calls 'require("ejs")' but our responsibility to include it in package.json
app.set('view engine', 'ejs')
// Tell it where are the views.
app.set('views', __dirname + '/views')

app.get('/hello', function(req, res) {
    // Pass it an object, template then access data by keys (firstWord, ...). Good only if you have lots of HTML and little JS.
  res.render('index', {firstWord: 'Hello', secondWord: 'World'})
})

const server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening...')
})

/*
* view engines
* res.render
* npm install --save ejs
* ejs
*/
