// const: lint should catch it, otherwise will throw error in runtime.
// require is sync, contrary to RequireJS
const fs = require('fs')

// __dirname -- dir of this file; __filename -- name (with full path) of this file.
const content = fs.readFileSync(__dirname + '/data/hello-world.txt', 
                                {encoding: 'utf-8'})

console.log(content)

/*
* Synchronous I/O
* require and modules
* the FS module
* __dirname
*/