const fs = require('fs')
const os = require('os')
const path = require('path')

const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

/**
 * Writing a function which receives a cb as LAST param (cb should receive (err, content) etc.) -- must call it in every case of success or failure.
 */
function copyFile(sourceFile, targetFile, cb) {
  fs.readFile(sourceFile, function(err, contentBuffer) {
    if (err)
      return cb(err)
    fs.writeFile(targetFile, contentBuffer, function(err) {
      if (err)
        return cb(err)
      
      cb()
    })
  })
}

copyFile(sourceFile, targetFile, function(err) {
    fs.readFile(targetFile, {encoding: 'utf-8'}, function(err, content) {
      console.log(content)
    })
})

/*
* How to write functions that are async
* Handling results.
* Handling errors.
 */