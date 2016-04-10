const fs = require('fs')
const os = require('os')
const path = require('path')

const sourceFile = path.join(__dirname, 'data/this-file-does-not-exist.txt')
const sourceFile2 = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

fs.readFile(sourceFile, function(err, contentBuffer) {
  if (err)
    return fs.readFile(sourceFile2, function(err, contentBuffer) {
      if (err)
          // Unhandled exception. Call stack is very shallow, usually no-one below will have a "catch". This is "fail-fast".
        throw err
      // first failed, second succeeded, so call "next", which can also be called if first 'if' succeeded. 
      // Usually that's how we avoid long convoluted chains of handlers.
      next(contentBuffer)
    })
  else
    next(contentBuffer)
  
  function next(contentBuffer) {    
    fs.writeFile(targetFile, contentBuffer, function(err) {
      fs.readFile(targetFile, {encoding: 'utf-8'}, function(err, content) {
        console.log(content)
      })
    })
  }  
})

/*
* Handling err
* Callbacks and error handling make code horrible
* Unhandled exceptions 
 */