// An event is basically a signal that indicates that
// something has happened in our application

const EventEmitter = require('events');
// console.log(EventEmitter);
//(CLASS)

//REQUIRE function is the way to include modules that exist in separate files
// Note that here, in terms of the naming,
// the first letter of every word is upper case.
// This is a convention that indicates that this Event
// Emitter is a class. It's not a function, it's not a simple
// value, it's a class. The class is container for properties
// and functions which we call methods, so in this Event
// Emitter class, we have this method that you see



// JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition. Methods are functions stored as object properties.
`
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };`  
//Method example

const emitter = new EventEmitter
//( (one) OBJECT )

// Now here in order to use this Event Emitter, first we need to create
// an instance(caso/case) of this class. So constant emitter
// we set this to new EventEmitter.
// So here, this Emitter is an object.

// CLASS X OBJECT
// A class can be thought of as a "type", with the objects being "variable" of that type


// register a event listener
// emitter.on('name-of-event', 'call-back-fucntion'(){

// })
emitter.on('messageLogged', function(){
    console.log('Listener called')
 });
 

// raise an event 
// emitter.methods('name of event')
emitter.emit('messageLogged');





// if you register the
// listener AFTER calling the emit method, nothing would have
// happened. Because when we call the emit method, this emitter
// iterates over all the registered listeners and calls them synchronous