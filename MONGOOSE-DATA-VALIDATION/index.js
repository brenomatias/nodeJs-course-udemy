const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');
// connect to our MongoDB database

const courseSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    catetory: {
        type: String,
        enum: ['web', 'mobile', 'network']
    },
    author: String, 
    tags: [ String ],
    date: { type:Date, default: Date.now }, 
    isPublished: Boolean,
    price: {
       type: Number,
       required: function() { return this.isPublished; },
       min: 10,
       max: 200,
    }
  });

  // required: true -> validation (booelean)
  // required built in validators

   // required: function() { return this.isPublished; }
  // a function to conditionally make a property required.


const Course = mongoose.model('Course', courseSchema);
//create a model

async function createCourse() {

    const course = new Course({
        name: 'Back end course',
        // catetory: ''
        author: 'Breno Matias',
        tags: ['nodejs', 'frontend'],
        isPublished: true,
        price: 30,
    
    });

    try {
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }


}

createCourse();

// In MongoDB we don't have that, MongoDB
// doesn't care about any of this stuff. So this validation we have implemented here
// is only meaningful in Mongoose. At the time we tried to save
// a course, Mongoose runs the validation logic, and if the course,
// is not valid it won't save it to the database