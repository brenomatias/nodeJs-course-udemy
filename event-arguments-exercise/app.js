const EventEmitterClass = require('events');
//(CLASS)

const emitter = new EventEmitterClass
//( (one) OBJECT )
console.log(emitter);

const eventListener = emitter.on('messageLoggedOn', (arg) => {
    console.log('Login Done',arg)
 });

console.log(eventListener);

// raise an event 
// emitter.methods('name of event')
emitter.emit('messageLoggedOn', { id:1, url: 'http://'});





