async function getCousers(){
    const courses = await Course 
    .find({ author: 'Breno'})
    .limit(10)
    .sort({ name: 1 })
    .count(); // count of documents that match this criteria.
}