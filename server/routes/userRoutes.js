import express from "express";

import User from "../models/User.js";

const router = express.Router();

// Controller Import
import { registerUser, loginUser } from "../controllers/authController.js";

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export default router;
