const assert = require('assert')
const mult = require('./src/mult')
const badMult = require('./src/bad-mult')

// Use Mocha, not Jasmine (see 03, 04). If error thrown -- fail; otherwise -- pass.
describe("mult", function() {
  it("01-should multiply stuff", function() {
    assert.equal(mult(3, 4), 12)    
  })
  
  it("02-should multiply negative and positive correctly", function() {
    assert.equal(badMult(3, -4), -12)    
  })
})

/*
* Mocha
* describe
* it
* assert
*/