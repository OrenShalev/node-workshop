const fs = require('fs')

// Stuff on module.exports are available from outside, the rest is not.
// In this case, we're exposing a function, but can also export an object or whatever.
module.exports = function copyFile(sourceFile, targetFile, cb) {
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

/*
* Creating a module with a 'default' export
 */