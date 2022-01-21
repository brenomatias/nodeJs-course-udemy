// joi
// The most powerful schema description language and data validator for JavaScript.

const Joi = require('@hapi/joi'); // Class import joi
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
    const schema = Joi.object({name: Joi.string().min(3).require()})

    const result = schema.validate(req.body); 
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


