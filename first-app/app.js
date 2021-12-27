// function sayHello(name) {
//     console.log('Hello' + name)
// }

// sayHello('Breno');
// // sayHello(window);

// console.log(module);


// in the terminal 
// node app.js 
// node give the file to v8 (js executer) for execution
// in node we dont have window or document arguments -> just in browsers


// Loading module


const logger = require('./logger');
// este e o modulo importado
console.log(logger);

logger.log1('message');
// log is the function in logger


// const logger2 = require('./logger');
// logger2('breno test')
// // logger2 is not an object because it was exported like 
// //    module.exports = log2; instead module.exports.log2 = log2;
