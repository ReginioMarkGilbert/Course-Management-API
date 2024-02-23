/**
 * Course Controller
 * 
 * This controller module handles operations related to courses, including retrieving, sorting, and selecting course data based on specific criteria.
 * It interacts with the Course model to fetch course information from the database.
 * 
 * Functions:
 * - `getCourseNamesSortedAlphabetically(res)`: Retrieves all published backend courses and sorts them alphabetically by their names.
 * - `getCoursesNameAndSpecialization(res)`: Selects and extracts the name and specialization of each course.
 * - `getPublishedCourses(res)`: Retrieves all published BSIS and BSIT courses from the curriculum.
 * 
 * Parameters:
 * - @res (Response): The HTTP response object used to send data or error messages to the client.
 * 
 * Data Validation:
 * The `validateCourse` function ensures the accuracy of course descriptions and tags.
 * 
 * Error Handling:
 * Each function includes error handling to respond with appropriate HTTP status codes and error messages in case of failures.
 * 
 * Note: This controller relies on the Course model for database interactions and data retrieval.
 */

const Course = require("../models/course");

// Validation helper function
function validateCourse({ description, tags }) {
    const errors = [];
    if (typeof description !== 'string' || description.trim() === '') {
        errors.push('Invalid or missing course description.');
    }
    if (!Array.isArray(tags) || tags.length === 0) {
        errors.push('Invalid or missing course tags.');
    }
    return {
        isValid: errors.length === 0, // Check if no errors
        errors,
    };
}

// Helper function to extract courses from years
async function extractCourses() {
    const data = await Course.find(); // Retrieve course data from the database
    return data.reduce((acc, curr) => { // Reduce the data to extract courses from different years
        ["1st Year", "2nd Year", "3rd Year", "4th Year"].forEach(year => {
            if (curr[year]) acc.push(...curr[year]); // Add courses from the current year to the acc var
        });
        return acc;
    }, []); // make empty array for iteration
}

// Helper function for sorting courses by name
function sortCoursesByDescription(courses) {
    const courseNames = courses.map((course) => ({
        year: course.year,
        // get the course names only
        description: course.description,
    }));
    // now we sort the names alphabetically
    return courseNames.sort((a, b) => a.description.localeCompare(b.description));
}

// Retrieve all published backend courses and sort them alphabetically by their names.
// get all courses and sort their names alphabetically
exports.getCourseNamesSortedAlphabetically = async (res) => {
    try {
        const courses = await extractCourses(); // get all courses
        // validate courses before sorting
        const validatedCourses = courses.filter(course => typeof course.description === 'string' && course.description.trim() !== '');
        // now sort the validated courses by names
        const sortedCourses = sortCoursesByDescription(validatedCourses);
        res.json(sortedCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Select and extract the name and specialization of each course
// get all course by its name and specialization only
exports.getCoursesNameAndSpecialization = async (res) => {
    try {
        const courses = await extractCourses(); // get all courses
        const courseInfo = courses.map(course => {
            const { isValid, errors } = validateCourse(course); // Validate the course
            if (!isValid) { // Check course is valid
                throw new Error(`Invalid course data: ${errors.join(', ')}`);
            }
            return { description: course.description, tags: course.tags }; // return course name and specialization
        });
        res.json(courseInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all published BSIS and BSIT courses from the curriculum.
// get all courses
exports.getPublishedCourses = async (res) => {
    try {
        const courses = await extractCourses(); // get all courses
        const validatedCourses = courses.filter(course => { // Filter courses
            const { isValid } = validateCourse(course); // Validate the course
            return isValid && (course.tags.includes("BSIT") || course.tags.includes("BSIS"));
        }).map(({ description, tags }) => ({ description, tags }));

        if (validatedCourses.length === 0) { // Check here if no valid courses found
            throw new Error("No valid courses found");
        }

        res.json(validatedCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

