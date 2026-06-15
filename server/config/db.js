import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("Database Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;

// VjgiI2K6AGlpMFyP

// e18JIwBGHWTIBjPS
// mongodb+srv://vipinkumar94997_db_user:e18JIwBGHWTIBjPS@lms-platform.zxzx7iy.mongodb.net/
