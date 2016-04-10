"use strict"
const Promise = require('bluebird')

function* generator() {
  yield Promise.resolve("Hello")
  yield Promise.resolve("World")
}

const iterator = generator()

// Kind of a runner, after every task move on to the next promise.
// Looks nice and sync, but completely async.
// Consider that the promises weren't simple strings, but maybe readFile.
iterator.next().value.then(v => {
  console.log(v)
  return iterator.next().value
}).then(v => {
  console.log(v)
})
