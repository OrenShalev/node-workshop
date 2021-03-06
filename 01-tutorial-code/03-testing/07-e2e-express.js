"use strict"
const expect = require('chai').expect
const childProcess = require('child_process')
const Promise = require('bluebird')
const fetch = require('node-fetch')

const waitUntilListening = (subProcess) => 
  new Promise((fulfill, reject) => {
      // Our server outputs 'listening' when started, use it as a trigger to start test.
    subProcess.stdout.on('data', fulfill)
    subProcess.on('err', reject)
    subProcess.on('exit', (code) => 
      code === 0 ? fulfill() : reject(new Error(`Process returned ${code}`)))
  })

describe("mult", function() {
  const PORT_NUMBER = 5364
  let subProcess
  before(Promise.coroutine(function*() {
     subProcess = childProcess.fork(`${__dirname}/src/express-mult.js`, [], {
      env: Object.assign({}, process.env, {
        PORT: PORT_NUMBER
      }),
         // Put stdout and stderr in the subprocess.
      silent: true
    })
      // Need to wait for node to start the server and start listening
    yield waitUntilListening(subProcess)    
  }))
  
  after(() => subProcess.kill())
  
  it("01-should multiply stuff", Promise.coroutine(function*() {
    const response = yield fetch(`http://localhost:${PORT_NUMBER}/mult?a=5&b=6`)
    expect(response.ok).to.be.true
    
    const body = yield response.text()
    expect(body).to.equal('30')
  }))
  
  it("02-should multiply negatives", Promise.coroutine(function*() {
      // fetch here is a lib which implements the standard fetch.
    const response = yield fetch(`http://localhost:${PORT_NUMBER}/mult?a=5&b=-6`)
    expect(response.ok).to.be.true
    
    const body = yield response.text()
    expect(body).to.equal('-30')
  }))
})


/*
* before/after
* child_process.fork
* silent: true
* wait for listening
* fetch
*/