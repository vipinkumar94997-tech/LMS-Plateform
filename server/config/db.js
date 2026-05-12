const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://vipinkumar94997_db_user:e18JIwBGHWTIBjPS@lms-platform.zxzx7iy.mongodb.net/lms_db",
    );
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("Database Connection Failed ❌", error);
    process.exit(1);
  }
};

module.exports = connectDB;

// VjgiI2K6AGlpMFyP

// e18JIwBGHWTIBjPS
// mongodb+srv://vipinkumar94997_db_user:e18JIwBGHWTIBjPS@lms-platform.zxzx7iy.mongodb.net/
