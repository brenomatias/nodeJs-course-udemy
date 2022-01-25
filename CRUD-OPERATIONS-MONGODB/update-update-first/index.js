// Update data directly in the database

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
    const result = await Course.updateOne({_id: id}, {
        $set: {
            author: 'Mosh',
            isPublished: false
        }
    });

    console.log(result)
}

updateCourses('5a68fde3f09ad7646ddec17e');

// 5a68fde3f09ad7646ddec17e = id definido no ducumento no db

// Approach: Update First 
// Update directly
// Optionally: get the updated document