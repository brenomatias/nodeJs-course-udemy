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

async function getCourses(){

    // eq (equal)
    // ne (not equal)
    // gt (greater than)
    // gte (greater than or equal to)
    // lt (less than)
    // lte (less than or equal to)
    // nin (not in)
    // in

    const courses = await Course
      .find({ price: {$gt: 10, $lte: 20 } })
      // .fin({price: { $in: [10, 15, 20] } })
      .limit(10)
      .sort({ name: 1 })
      .select({ name:1, tags: 1})

   console.log(courses);
}

getCourses();
