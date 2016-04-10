const os = require('os')
const path = require('path')
const fs = require('fs')
// Requiring a module from my filesystem, relative to this file, contrary to standard modules used above. 
const copyFile = require('./07a-modules-export-default')

const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

copyFile(sourceFile, targetFile, function(err) {
    fs.readFile(targetFile, {encoding: 'utf-8'}, function(err, content) {
      console.log(content)
    })
})

/*
* Importing modules
 */