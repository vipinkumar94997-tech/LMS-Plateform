const CourseModel = require("../models/Course");
// @desc    Get all courses
// @route   GET /api/courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new course (Admin only)
// @route   POST /api/courses
const createCourse = async (req, res) => {
  try {
    const body = req.body;
    const course = await CourseModel.create(body);
    res.status(201).json({ message: course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
};
