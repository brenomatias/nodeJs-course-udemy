const express = require('express');


// By convention we call this object app
//  this represents our application.
// Now this app object has a bunch of useful methods. (get,post, put..)
const app = express(); // (object)


app.get('/', (request, response) => {
   response.send('Hello World!!2!')
});
// callback function (request, respon) => { }
// is also called ROUTE HANDLER

app.get('/api/courses', (req, res) => {
   res.send([1,2,3])
});
// '/api/courses' = endpoint


// PORT 
// we need to read the value of this port
// able. And the way we do that is by using the
// processes object.
const port = process.env.PORT || 3000;
// .PORT (variable name (environment variable))

app.listen(port, () => console.log(`Listening on port ${port}`));

// On terminal: export PORT=500

//this is the proper way to assign a port.
// To your Node applications. You should attempt to read the value
// of an environment variable called port. If there is a value, we should use that.




// implement a new route
app.get('/api/courses/:id', (req, res) => {
   res.send(req.params.id)
})


// NEWS BLOG
// For example, imagine you're building a service for powering a
// BLOG. So you could have a route like this, posts
// year, month. So we have two parameters.
// And with these you can get all the posts for even months

app.get('/api/posts/:year/:month', (req, res) => {
   res.send(req.params)
})

// this is our request params object. We have two properties
//  year and month and their name based on our route parameters.

//ex: 
// http://localhost:5000/api/posts/2018/1
// return: 
// {
//    "year": "2018",
//    "month": "1"
//  }