const express = require('express');
const app = express(); // (object)


const courses = [
    { id:1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id:3, name: 'course3'},
]


app.get('/', (request, response) => {
   response.send('Hello World!!2!')
});


app.get('/api/courses', (req, res) => {
   res.send(courses)
});


// implement a new route
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(carac => carac.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given id was not found')//404
  res.send(course)
})


// if this course doesn't have a value, in other words
// if you don't find a course with the given id, by convention
// we should return a response with the http status code
// of 404. That means object not found



const port = process.env.PORT2 || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
// ON TERMINAL 'export PORT=portValue' -> define localhost port
// nodemon module.js