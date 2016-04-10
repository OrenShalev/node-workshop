"use strict"
// note the asterisk.
function* generator() {
  yield "Hello"
  yield "World"
}

const iterator = generator()

// next() returns an object with fields 'done' and 'value'.
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().done)

for (const v of generator())
  console.log(v)