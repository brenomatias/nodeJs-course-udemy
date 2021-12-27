// The path module provides utilities for working with file and directory paths

//methods avaible in this module:
// https://nodejs.org/dist/latest-v16.x/docs/api/os.html
// here are the modules avaible in node.js


// Path module
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


// OS module
const os = require('os');
const freeMemory = os.freemem();
const totalMemory = os.totalmem();

console.log(freeMemory,totalMemory);


// that before Node you could not get this kind of information using JavaScript.
// JavaScript used to run only inside of a browser, and
// we could only work with the window or document objects, we couldn't get
// information about the operating system. But when using Node, our
// JavaScript code is executed outside of a browser, or as some people
// say, on the server. With this we can get information about the
// operating system. We can work with files, we can work with the network,
// for example, we can build a web server that listens for http
// requests on a given port, and I'm going to show you all this later in this section.


//File Sytem Module
const fileSystem = require('fs');

const allFilesOnFolder = fileSystem.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files)
});
console.log(allFilesOnFolder);


// now all these asynchronous methods take a function
// as their last argument. Node will call this function
// when that asynchronous operation completes. We call this
// function a call back


// So as I told you in the last lecture, a Node process has a single
// thread. If you're using Node to build a backend for your application,
// you might have several hundreds or thousands of clients connecting to
// that backend. If you keep that single thread busy, you won't be able to
// serve many clients