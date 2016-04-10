const fs = require('fs')
const os = require('os')
const path = require('path')

// How to get a full filename: path.join
const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

/**
 * When reading file without specifying encoding, getting a buffer and not a string.
 */
fs.readFile(sourceFile, function(err, contentBuffer) {
  fs.writeFile(targetFile, contentBuffer, function(err) {
    fs.readFile(targetFile, {encoding: 'utf-8'}, function(err, content) {
      console.log(content)
    })
  }) 
})

/*
* Pyramid of doom
* fs.writeFile
* Buffer vs. String
* path.join
 */