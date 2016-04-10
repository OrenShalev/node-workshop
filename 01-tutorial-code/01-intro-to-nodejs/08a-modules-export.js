const fs = require('fs')

// if we want to export an object with many things, use exports.X = ...;
// if want to export one thing (e.g. one function), use module.exports = <value>;
/* module. */exports.copyFile = function copyFile(sourceFile, targetFile, cb) {
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
* Creating a module
 */