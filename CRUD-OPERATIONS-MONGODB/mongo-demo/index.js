const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Conected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB'))

// playground = DATA BASE

//But in a real application your connection string should come from a configuration file

// this connect method returns a promise.

// after: node index.js


const courseSchema = new mongoose.Schema({
     name: String,
     author: String,
     tags: [String],
     date: { type: Date, default: Date.now},
     isPublished: Boolean
});

// We use a schema to define the shape of documents within a collection in MongoDB.

// creating an instance of this class we pass an object, and in this object we specify the key value pairs that we should have in course documents. ===== Schema({})



const Course = mongoose.model('Course', courseSchema);

// const course = new Course({
//     name: 'Node.js course',
//     author: 'Breno',
//     tags: ['node', 'backend'],
//     isPublished: true,

// });  //OBJECT

// to create a class like course, we need to compile the schema,into a model,

// model('class-name', schema)
// with this we have a class Course in our Schema

// CLASS = Uppercase initial

// new Course({ object to initialize our course object}) 




// save the data

// we're dealing with an asynchronous operation, because it's going to take some time to save this course to the database, because we are going to access the file system

async function createCourse() {

    const course = new Course({
        name: 'Angular course',
        author: 'Breno',
        tags: ['angukar', 'frontend'],
        isPublished: true,
    
    });

    const result = await course.save();
    console.log(result);

}


createCourse();

// then node index.js
// DOCUMENT CREATED