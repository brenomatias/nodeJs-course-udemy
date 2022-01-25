async function getCourses(){
    const courses = await Course 
    .find({ author: /^Breno/})
    .find({ author: /Matias$/i})
    .find({author: /.*Breno.*/})

    .limit(10)
    .sort({ name: 1})
    .select({ name: 1, tags: 1});

}

// sixtaxe

// object: /pattern/

// ^ carrot character to represent a string that starts with something
// /^Breno/ = a string that starts with Breno

// /Matias$/ = a string which ends with Matias

// i = case insensitvive

// /.*Breno.*/ = a srting that includes Breno