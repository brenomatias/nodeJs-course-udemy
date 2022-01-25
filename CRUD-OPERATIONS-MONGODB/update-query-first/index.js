// This approach is useful, if you receive an input from the client,
// and you want to make sure that the update is a valid operation

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
.then(() => console.log('Conected to MongoDB...'))
.catch(err => console.log('Could not connect to MongoDB'))
async function updateCourses(id) {
}

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});


const Course = mongoose.model('Course', courseSchema);

async function updateCourses(id){
    const course = Course.findById(id)
    if(!course) return;

    course.isPublished = true;
    course.author = 'Another Author';

    // course.set({
    //     isPublished: true,
    //     author: 'Another Author'
    // }) 
           // mesma coisa que a abordagem de cima

    const result = course.save();
    console.log(result)
}

updateCourses('5a68fde3f09ad7646ddec17e');

// 5a68fde3f09ad7646ddec17e = id definido no ducumento no db

// Aprroach: Query First
// findById()
// Modifify its properties
// save()
