const http = require('http');
// comst http require (' http ') method that allows you to create a HTTP server
// load http module


// this server is an EventEmitter.
const server = http.createServer((req, res) => {
    if (req.url === '/') { // requisição
        res.write('Hello World'); //return on the port
        res.end();
    }

    if (req.url === '/api/courses/') {
        res.write(JSON.stringify([1, 2, 3]))
    } // return of database to specific route 
    res.end()

});



server.listen(3000);

console.log('Listening on port 3000...');


// as we define more routes for our application, we need
//to add more if blocks in this callback function

// A framework (EXPRESS)
// gives our application a proper structure, so we can easily add
// more routes, while keeping our application code maintainable.