import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import dashboardRoutes from "./routes/dashboardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";

import { createCourse } from "./controllers/courseController.js";

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ================= DATABASE CONNECTION =================
connectDB();

// ================= ROUTES =================

// Test Route
app.get("/", (req, res) => {
  res.send("LMS API is running...");
});

// Dashboard Routes
app.use("/api/dashboard", dashboardRoutes);

// User Routes
app.use("/api/users", userRoutes);

// Course Routes
app.use("/api/courses", courseRoutes);

// Create Course
app.post("/api/courses", createCourse);

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
