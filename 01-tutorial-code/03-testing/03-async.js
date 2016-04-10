const expect = require('chai').expect
const asyncMult = require('./src/async-mult')
const asyncBadMult = require('./src/async-bad-mult')

// Test async code: mocha provides "done" function -- to call at the end of the test. If not called, timeout will fire (default 2s).
describe("mult", function() {
  it("01-should multiply stuff", (done) => {
    asyncMult(3, 4, (err, v) => {
      expect(err).to.be.null
      expect(v).to.equal(12)
      done()    
    })
  })
  
  it("02-should multiply negative and positive correctly", (done) => {
    asyncBadMult(3, -4, (err, v) => {
      expect(err).to.be.null
      expect(v).to.equal(-12)
      done()    
    })
  })
})

/*
* done
* to.be.null
*/
