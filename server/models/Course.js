const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    thumbnail: { type: String }, // Image ka URL
    instructor_name: { type: String },
  },
  { timestamps: true },
);

const CourseModel = model("Course", courseSchema);

module.exports = CourseModel;
