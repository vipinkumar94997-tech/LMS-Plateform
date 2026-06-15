import CourseModel from "../models/Course.js";

// GET all courses
const getCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE new course
const createCourse = async (req, res) => {
  try {
    const body = req.body;

    const course = await CourseModel.create(body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCourses, createCourse };
