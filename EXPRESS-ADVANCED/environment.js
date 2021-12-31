// Environment Variables in Node.js
// In Node.js, process.env is a global variable that is injected during runtime. It is a view of the state of the system environment variables. When we set an environment variable, it is loaded into process.env during runtime and can later be accessed.

// you need to know what environment your code is running on. Is this a development environment, or a production environment?

const app = express();

const morgan = require('morgan');
// https://www.npmjs.com/package/morgan
// HTTP request logger(Registrador de solicitações) middleware for node.js


process.env.NODE_ENV;
console.log(`NODE_ENV: ${process.envl.NODE_ENV}`);

app.get('env')         //another way to get the current environment

//process object, this is a global object in Node that gives us access to the current process.

// In Node.js, process.env is a global variable that is injected during runtime. It is a view of the state of the system environment variables. When we set an environment variable, it is loaded into process.env during runtime and can later be accessed.

// we have a standard environment variable called node underline env(NODE_ENV),and this environment variable returns the environment for this node application.


// NODE_ENV === If it's not set, here we're going to get undefined.Alternatively, we can set this from the outside, we can set this todevelopment, to testing, to staging, or production




//Environment Variables are variables that are set by the Operating System. They are decoupled from application logic. They can be accessed from applications and programs through various APIs.




//We want to enable logging of http requests only on the development machine

if (app.get('env' === 'development')) {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');

}


//Setting an Environment Variable === To set an environment variable the export command is used. We give the variable a name, which is what is used to access it in shell scripts and configurations and then a value to hold whatever data is needed in the variable.

// export NODE_ENV=production

