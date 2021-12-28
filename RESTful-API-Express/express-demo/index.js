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
   res.send()
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