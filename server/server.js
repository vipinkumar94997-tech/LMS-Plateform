// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const courseRoutes = require("./routes/courseRoutes");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Routes
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/courses", require("./routes/courseRoutes")); // Yeh line courses ko handle karegi

// // Database Connection
// connectDB();

// // Basic Route for Testing
// app.get("/", (req, res) => {
//   res.send("LMS API is running...");
// });

// app.use("/course", courseRoutes);

// // Port Configuration
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const { createCourse } = require("./controllers/courseController");

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

app.post("/api/courses", createCourse);

app.use("/api/users", userRoutes);

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
