const fs = require('fs')
const os = require('os')
const path = require('path')

const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

const operations = {
  // defining a function with a name, not like "copyFile: function(cb) {"
  copyFile(cb) {
    fs.readFile(this.sourceFile, (err, contentBuffer) => {
      if (err)
        return cb(err)
        
      fs.writeFile(this.targetFile, contentBuffer, err => {
        if (err)
          return cb(err)
        
        cb()
      })
    })
  },

  // Instead of writing "sourceFile: sourceFile", ...
  sourceFile,
  targetFile
}


operations.copyFile(err => {
    fs.readFile(targetFile, {encoding: 'utf-8'}, (err, content) =>
      console.log(content)
    )
})


/*
* Functions in simplified objects
 */