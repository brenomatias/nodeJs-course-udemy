// The path module provides utilities for working with file and directory paths

const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);


// OS module
// information about the operating system
//methods avaible in this module:
// https://nodejs.org/dist/latest-v16.x/docs/api/os.html

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