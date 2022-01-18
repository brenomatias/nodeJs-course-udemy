const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listerner
logger.on('messageLogged', (arg) => {
    console.log('Listerner called', arg)
});


logger.log('message')

// nao deu certo, rever
// If you want to raise events
// in your application to signal that something has happened, you need to create
// a class, that extends EventEmitter.
// With this, that class will have all the functionality defined in
// EventEmitter. But you can also add additional functionality, in this
// case, we have the ability to log a message, and
// then inside that class whenever you want to raise an event you use this
// .emit because this references this logger class
// itself, which extends EventEmitter, so all the
// methods defined in EventEmitter will also be part of this class.
// Okay? Now finally, in app
// module, again, instead of using an instance of
// EventEmitter, you will use an instance of the custom clas
// that you have defined that extends EventEmitter.