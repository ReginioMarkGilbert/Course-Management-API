const Course = require("../models/course");

// Helper function to extract courses from years
async function extractCourses() {
    const data = await Course.find();
    return data.reduce((acc, curr) => {
        ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach(year => {
            if (curr[year]) acc.push(...curr[year]);
        });
        return acc;
    }, []);
}

// Helper function for sorting courses by name
function sortCoursesByDescription(courses) {
    return courses.sort((a, b) => a.description.localeCompare(b.description));
}

// Retrieve all published backend courses and sort them alphabetically by their names.
// get all courses and sort their names alphabetically
exports.getCoursesSortedByName = async (res) => {
    try {
        const courses = await extractCourses();
        const sortedCourses = sortCoursesByDescription(courses);
        res.json(sortedCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Select and extract the name and specialization of each course
// get all course by its name and specialization only
exports.getCoursesNameAndSpecialization = async (res) => {
    try {
        const courses = await extractCourses();
        const courseInfo = courses.map(({ description, tags }) => ({ description, tags }));
        res.json(courseInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all published BSIS and BSIT courses from the curriculum.
// get all courses
exports.getPublishedCourses = async (res) => {
    try {
        const courses = await extractCourses();
        const filteredCourses = courses.filter(course =>
            course.tags.includes("BSIT") || course.tags.includes("BSIS")
        ).map(({ description, tags }) => ({ description, tags }));
        res.json(filteredCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

