import express from "express";
const router = express.Router();

import { getCourses, createCourse } from "../controllers/courseController.js";

router.get("/", getCourses);

router.post("/", createCourse);

export default router;
