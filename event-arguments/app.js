const EventEmitter = require('events');
// CLASS
const emitter = new EventEmitter();
// OBJECT

// Register a event listener 
emitter.on('messaLogged', (arg) => {
    console.log('Listener called', (arg))
});

// the FUNCTION IS THE ACTUAL LISTENER
// arrow-function  (parameter) => { 

// }

// Raise an event
// emitter.emit('event-name', ID, url)   -> give us a URL to access the logged message directly
// emitter.emit('messageLogged', 1, 'url');

emitter.emit('messageLogged', {id:1, url:'httpp'});


// If you want to send multiple values about an event,
// it's a better practice to encapsulate these values inside an object(event argument)


// AQUI NAO FUNCIONOU MAS EM MODULE-EVENTS sim ? por que?
