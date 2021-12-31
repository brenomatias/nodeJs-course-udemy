// debug package
// npm in debug

const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');


//  have another debugger for debugging database related messages. So once again we load the debug module.
// We get a function, we call that function, give it a
// name space(NAME SPACE) like 'app:db' And this will return
// a debugging function.


const morgan = require('morgan');
const express = require('express');
const app = express();

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    // console.log('Morgan enabled...');
    startupDebugger('Morgan enabled')
}


dbDebugger('Connected to the databese...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listning on port ${port}...`));


//Now we're going back to the terminal and use an environment variable to determine what kind or debugging information we're going to see in the console.

// 'export DEBUG=app:startup'
//that means with this we're going to see only the debugging messages that are part of this name space
// 'node index.js'


// I don't want to see any debugging information. So we can reset this environment variable to nothing, run the application again
// 'export DEBUG='


// Or we may want to see debugging messages for multiple name spaces
// export DEBUG=app:startup, app:db;

// all debugging message
//'export DEBUG=app:*'



//a shortcut to set an environment variable in this case debug and run the application at the same time.
//'DEBUG=app:db nodemon index.js'