const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/getCoursesByName", (req, res) => {
    courseController.getCoursesSortedByName(res);
});

router.get("/getCoursesNameAndSpecialization", (req, res) => {
    courseController.getCoursesNameAndSpecialization(res);
});

router.get("/getPublishedCourses", (req, res) => {
    courseController.getPublishedCourses(res);
});

module.exports = router;