// joi
// The most powerful schema description language and data validator for JavaScript.

const Joi = require('joi'); // Class import joi
const express = require('express');
const app = express(); // (object)

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];


app.get('/', (req, res) => {
   res.send('Hello World!!2!')
});


app.get('/api/courses', (req, res) => {
   res.send(courses);
});




app.post('/api/courses', (req, res) => { 
    //  A schema defines the shape of our objects
    const schema = {
        name: Joi.string().min(3).required()
    }
    
    const result = Joi.validate(req.body, schema);
    console.log(result);


    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

   const course = {
       id: courses.length + 1,
       name: req.body.name
       }; 
     // new object
   courses.push(course);
   res.send(course);
});




// implement a new route
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(carac => carac.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given id was not found')//404
  res.send(course)
})




const port = process.env.PORT4 || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
// ON TERMINAL 'export PORT=portValue' -> define localhost port
// nodemon module.js