console.log('Before');
console.log('After');

//. In this program, when the first line executes the program is blocking, and the second line has to wait until the first line finishes execution. So that's why we call programs like this synchronous or blocking




setTimeout(()=> {
    console.log('Reading a usar from a database...')
}, 2000)

// simulating the action of reading a user from a database that is going to take two seconds

//This is a timeout function is an example of an asynchronous or non-blocking function. When we call this function, this function will schedule a task to be performed in the future, in this case two seconds after


// asynchronous does not mean concurrent or
// multithread. In this application, in this program, we have
// a single thread. So our single thread at first executes
// the first line. Then schedules a function to be called in two
// seconds, next it will display this message in the console
// and after that it will be free, so in two seconds from now
// it will execute this function and display this message on the console.