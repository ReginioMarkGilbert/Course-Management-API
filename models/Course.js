const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, "Course code cannot be empty."],
    },
    description: {
        type: String,
        required: [true, "Course description cannot be empty."],
    },
    units: {
        type: Number,
        required: [true, "Units cannot be empty."],
    },
    tags: {
        type: [String],
        required: [true, "Tags field cannot be empty"],
    },
});

const yearSchema = new mongoose.Schema(
    {
        "1st Year": [courseSchema],
        "2nd Year": [courseSchema],
        "3rd Year": [courseSchema],
        "4th Year": [courseSchema],
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", yearSchema);

module.exports = Course;
