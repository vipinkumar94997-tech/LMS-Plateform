const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // YAHAN HUMNE "teacher" ADD KAR DIYA HAI
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "teacher",
    },
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
