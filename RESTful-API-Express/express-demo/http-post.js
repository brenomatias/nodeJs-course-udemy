const express = require('express');
const app = express(); // (object)

app.use(express.json());
// when we call express.json method, this method returns
// a piece of middle ware and then we call app.use to
// use that middle ware in the reprocessing pipeline

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
]


app.get('/', (request, response) => {
   response.send('Hello World!!2!')
});


app.get('/api/courses', (req, res) => {
   res.send(courses)
});




app.post('/api/courses', (req, res) => {
   const course = {
       id: courses.length + 1,
       name: req.body.name
   }; // new object
   courses.push(course);
   res.send(course);
});




// implement a new route
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(carac => carac.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given id was not found')//404
  res.send(course)
})




const port = process.env.PORT3 || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
// ON TERMINAL 'export PORT=portValue' -> define localhost port
// nodemon module.js