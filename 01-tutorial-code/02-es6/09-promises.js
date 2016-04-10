"use strict"
const path = require('path')
const os = require('os')
const fs = require('fs')

/** 
 * Promises are like callbacks, except better:
 * 1. Chainsable.
 * 2. Errors are caught and trigger reject(), no need to catch them ourselves.
 * 3. Catch will work no matter who in the chain called reject() or threw an error.
 * how to USE promises below.
 */
const readFileAsync = (f, options) => 
  new Promise((fulfill, reject) => {
    fs.readFile(f, options, (err, content) => {
      if (err)
        return reject(err)
        
      fulfill(content)
    })
  }) 

// similar to above just without several {}{}{}...
const writeFileAsync = (f, content) => 
  new Promise((fulfill, reject) =>
    fs.writeFile(f, content, (err) => 
      err ? reject(err) : fulfill())) 

// This func doesn't to the copy -- it returns a promise to do the copy.
function copyFile(sourceFile, targetFile) {
  return readFileAsync(sourceFile)
    .then(contentBuffer => {
      return writeFileAsync(targetFile, contentBuffer)
    })
}

const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

copyFile(sourceFile, targetFile)
  .then(content => 
    readFileAsync(targetFile, {encoding: 'utf-8'}))
  .then(content => 
    console.log(content))
  .catch(err =>
    console.error(err))

/*
* Promises
* then
* catch
* Functions returning promises
* chaining of promises
*/