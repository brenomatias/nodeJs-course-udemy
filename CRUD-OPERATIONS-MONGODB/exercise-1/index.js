const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');
// connect to our MongoDB database

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});
// create a schema to define the shape of documents in our courses collection.

const Course = mongoose.model('Course', courseSchema);
//create a model

async function getCourses() {
  return await Course
  .find({ isPublished: true, tags: 'backend' })
  .sort({ name: 1 })
  .select({ name: 1, author: 1 });
}
// now that we have a model, we can use this to QUERY our courses

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();