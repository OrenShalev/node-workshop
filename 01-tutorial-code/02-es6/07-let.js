"use strict"

// var's scope is the entire function, let's scope is block -- like people expect.
// if you give const an object -- you can't change the object, but you CAN change its internals.
const fibonacci = (n) => {
  let a = 0
  let b = 1
  
  for (let i = 0; i < n ; ++i) {
    const tmp = b
    b = b + a
    a = tmp
  }
  
  return a
}

console.log(fibonacci(parseInt(process.argv[2])))

/*
* const vs let vs var
* process.argv
 */