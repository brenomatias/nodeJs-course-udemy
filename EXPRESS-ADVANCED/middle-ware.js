const express = require('express');
const app = express();

app.use(express.json()); // MIDDLEWARE FUNCTION
// use is a method to configure the middleware used by the routes of the Express HTTP server object. The method is defined as part of Connect that Express is based upon.



//CUSTOM MIDDLEWARE
app.use(function(req, res, next) {
    console.log('Logging...');
    next(); //pass control to next middleware

});
// /next, which is a
// reference to the next Middleware function in the pipeline.
// if you don't do this, because we are
// not terminating the request response cycle, our request will end up hanging
// toda vez que tiver uma execução no servidor sai um log por causa do next


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2'},
    { id:3, name: 'course3'}
];


//every route handler function we have is technically a Middleware
app.get('/', (req, res) => {
    res.send('hello world');
})
// because it takes a request option, and in this case
// it returns a response to the client,


app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }; // new object
    courses.push(course);
    res.send(course);
 });
 
 


const port = process.env.PORT || 3000;
// .PORT (variable name (environment variable))

app.listen(port, () => console.log(`Listening on port ${port}`));

//On terminal: export PORT=500


// Express standard server framework for Node.js