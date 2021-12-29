// /Creates an Express application
const express = require('express');
const app = express();

//Load a module
const Logger = require('./middle-ware');
// install the module
app.use(Logger);

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); //req.body
// use is a method to configure the middleware used by the routes of the Express HTTP server object. The method is defined as part of Connect that Express is based upon.
//Note As req.body’s shape is based on user-controlled input, 
// all properties and values in this object are untrusted and should be validated before trusting. 
app.use(express.static('public'))
// The express. static() middleware returns an HTTP 404 if it can't find a file, so that means you should typically call app. use(express. static()) after the rest of your app.




//CUSTOM MIDDLEWARE
app.use(function(req, res, next) {
    console.log('Logging...');
    next(); //pass control to next middleware

});


//MIDDLEWARE - AUTHETICATING
app.use(function(req, res, next) {
    console.log('Authenticating...');
    next(); //pass control to next middleware
});


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2'},
    { id:3, name: 'course3'}
];


// middleware
app.get('/', (req, res) => {
    res.send('hello world');
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }; // new object
    courses.push(course);
    res.send(course);
 });
 
 app.get('/api/courses', (req, res) => {
    res.send(courses);
})


const port = process.env.PORT1 || 3000;
// .PORT (variable name (environment variable))

app.listen(port, () => console.log(`Listening on port ${port}`));

//On terminal: export PORT1=5000
// to listen on the browser