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
    tags: {
        type: Array,
        validate: {
            validator: function(v){
                return v && v.lenght > 0;
            },
            message: 'A course should have at least one tag'
        }
    },
    date: { type:Date, default: Date.now }, 
    isPublished: Boolean,
    price: {
       type: Number,
       required: function() { return this.isPublished; },
       min: 10,
       max: 200,
    }
  });

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


// Custom validator 

// tags: {
//     type: Array,
//     validate: {
//         validator: function(v){
//             return v && v.lenght > 0;
//         },
//         message: 'A course should have at least one tag'
//     }
// },