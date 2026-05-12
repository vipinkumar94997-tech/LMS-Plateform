// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { registerUser, loginUser } = require("../controllers/authController");

// // Register User
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });

//     res.status(201).json({ message: "User Registered Successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Login User
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       const token = jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: "30d" },
//       );
//       res.json({ _id: user._id, name: user.name, email: user.email, token });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Logic ko Controller se import kiya gaya hai
const { registerUser, loginUser } = require("../controllers/authController");

// 1. User Registration Route
// URL: POST http://localhost:5000/api/users/register
router.post("/register", registerUser);

// 2. User Login Route
// URL: POST http://localhost:5000/api/users/login
router.post("/login", loginUser);

module.exports = router;
