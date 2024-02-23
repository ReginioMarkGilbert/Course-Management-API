/**
 * Course Routes
 * 
 * This module defines the routes related to courses, including endpoints for retrieving course data based on specific criteria.
 * It utilizes the courseController to handle the business logic for these routes.
 * 
 * Endpoints:
 * - GET `/getCourseNamesSortedAlphabetically`: Retrieves all published backend courses and sorts them alphabetically by their names.
 * - GET `/getCoursesNameAndSpecialization`: Selects and extracts the name and specialization of each course.
 * - GET `/getPublishedCourses`: Retrieves all published BSIS and BSIT courses from the curriculum.
 * 
 * Parameters:
 * - @req (Request): The HTTP request object containing client data.
 * - @res (Response): The HTTP response object used to send data or error messages to the client.
 * 
 */

const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/getCourseNamesSortedAlphabetically", (req, res) => {
    courseController.getCourseNamesSortedAlphabetically(res);
});

router.get("/getCoursesNameAndSpecialization", (req, res) => {
    courseController.getCoursesNameAndSpecialization(res);
});

router.get("/getPublishedCourses", (req, res) => {
    courseController.getPublishedCourses(res);
});

module.exports = router;