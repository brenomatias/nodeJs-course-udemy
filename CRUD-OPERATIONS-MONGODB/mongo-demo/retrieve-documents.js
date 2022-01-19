const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Conected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB'));

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

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

async function getCourses
createCourse();