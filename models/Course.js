const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
	course: { type: String, reqrequired: true },
	tag: { type: String, reqrequired: true },
	date: { type: Date, defaultValue: Date.now },
});

module.exports = mongoose.model("Courses", CourseSchema);
