const result = await Course.deleteOne({ _id: id });
const result = await Course.deleteMany({ _id: id });
const course = await Course.findByIdAndRemove(id);