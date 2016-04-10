const fs = require('fs')
/**
 * Interesting point about async: in other systems, the program would have finished after readFile and BEFORE the callback had a chance to run.
 * What happens is that we tell Node runetime that we're expecting an event. 
 * After readFile controls goes to runtime which sees that the event queue is not empty. Runtime waits for event, transfers control to the handler, and so on.
*/
fs.readFile(__dirname + '/data/hello-world.txt', {encoding: 'utf-8'}, 
  function(err, content) {
    console.log(content)  
  })

/*
* Asynchronous I/O
* Callbacks
* err
*/