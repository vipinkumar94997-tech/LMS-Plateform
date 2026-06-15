import User from "../models/User.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.count();

    const totalStudents = await User.count({
      where: { role: "student" },
    });

    const totalTeachers = await User.count({
      where: { role: "teacher" },
    });

    const activeUsers = await User.count({
      where: { isActive: true },
    });

    res.json({
      totalUsers,
      totalStudents,
      totalTeachers,
      activeUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
