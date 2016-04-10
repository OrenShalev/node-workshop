const Promise = require('bluebird')
const fs = require('fs')
Promise.promisifyAll(fs)
const path = require('path')
const os = require('os')

// coroutine is bluebird's runner. Describe tasks with yield <task>. Returns a promise. Handles errors and so on.
// coroutine receives a generator and returns a function that returns a promise.
const copyFile = Promise.coroutine(function* (source, target) {
  const content = yield fs.readFileAsync(source)
  
  yield fs.writeFileAsync(target, content)
})

const sourceFile = path.join(__dirname, 'data/hello-world.txt')
const targetFile = path.join(os.tmpdir(), 'copied-file.txt')

copyFile(sourceFile, targetFile)
  .then(content => 
    Promise.promisify(fs.readFile)(targetFile, {encoding: 'utf-8'}))
  .then(content => 
    console.log(content))
  .catch(err =>
    console.error(err))
