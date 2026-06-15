import express from "express";

const router = express.Router();

// Controller Import
import { registerUser, loginUser } from "../controllers/authController.js";

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

export default router;
