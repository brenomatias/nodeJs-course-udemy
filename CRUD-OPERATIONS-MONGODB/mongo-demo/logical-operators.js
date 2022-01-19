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
   
     // or
     // and

    const courses = await Course
      .find()
      .or([ {author:'Breno'}, {isPublished: true}])
      .and([])
      .limit(10)
      .sort({ name: 1 })
      .select({ name:1, tags: 1})

   console.log(courses);
}

getCourses();

// we want to get the courses that are published by Mosh, or
// the courses that are published, so we can have courses that are published but they are not authored by Breno

// OR OPERATOR

// .or([ {}, {}])
each object {} is a filter