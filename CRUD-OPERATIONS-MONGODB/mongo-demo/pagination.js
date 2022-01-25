async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;
    // in a real world application you pass these values as query string parameters

    // you might have an API to get the list of courses, this endpoint can get query string parameters like '/api/courses?pageNumber=2&pageSixe=10'. So, page number,  we set this to 2, and page size, we set this to 10


    const courses = await Course 
      .find({ author: 'Breno'})
      .skip((pageNumber - 1) *pageSize)
      .limit(pageSize)
      .sort({mame: 1})
      .select({ name: 1, tags: 1});
    console.log(courses);
}

getCourses;