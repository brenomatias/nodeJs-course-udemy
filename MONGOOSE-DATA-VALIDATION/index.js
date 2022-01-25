const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');
// connect to our MongoDB database

const courseSchema = new mongoose.Schema({
    name: String,
    author: String, 
    tags: [ String ],
    date: { type:Date, default: Date.now }, 
    isPublished: Boolean,
    price: Number
  });

const Course = mongoose.model('Course', courseSchema);
//create a model

async function createCourse() {

    const course = new Course({
        name: 'Back end course',
        author: 'Breno Matias',
        tags: ['nodejs', 'frontend'],
        isPublished: true,
    
    });

    const result = await course.save();
    console.log(result);

}


createCourse();