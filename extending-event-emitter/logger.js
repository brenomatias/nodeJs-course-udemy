const EventEmitter = require('events');


var url = 'http://lala';

class Logger extends EventEmitter {
  log(message) {
    //Send an Http request 
    console.log(message);

    // Raise an event
    this.emit('messageLogged', { id: 1, url: 'http'});
    }
}

module.exports = Logger;