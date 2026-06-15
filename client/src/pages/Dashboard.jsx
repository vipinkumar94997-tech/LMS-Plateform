import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

import { BookOpen, Users, GraduationCap, Activity } from "lucide-react";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  // NEW STATS STATE
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalTeachers: 0,
    activeUsers: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // COURSES FETCH
        const courseResponse = await axios.get(
          "http://localhost:5000/api/courses",
        );

        if (courseResponse.data) {
          setCourses(courseResponse.data);

          setStats((prev) => ({
            ...prev,
            totalCourses: courseResponse.data.length,
          }));
        }

        // USERS FETCH
        const usersResponse = await axios.get(
          "http://localhost:5000/api/users",
        );

        if (usersResponse.data) {
          const users = usersResponse.data;

          const students = users.filter(
            (user) => user.role === "student",
          ).length;

          const teachers = users.filter(
            (user) => user.role === "teacher",
          ).length;

          const activeUsers = users.filter(
            (user) => user.isActive !== false,
          ).length;

          setStats((prev) => ({
            ...prev,
            totalStudents: students,
            totalTeachers: teachers,
            activeUsers: activeUsers,
          }));
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchDashboardData();
  }, []);

  const dummyCourses = [
    {
      _id: "1",
      title: "Full Stack Web Development",
      instructor: "Vipin Sisodiya",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
      students: 120,
    },
    {
      _id: "2",
      title: "UI/UX Design Masterclass",
      instructor: "Arjun Singh",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
      students: 85,
    },
    {
      _id: "3",
      title: "Node.js Backend Mastery",
      instructor: "Vipin Sisodiya",
      thumbnail:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500",
      students: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800">
            Dashboard Overview
          </h1>

          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Welcome back! Here’s your LMS analytics overview.
          </p>
        </div>

        {/* DASHBOARD STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {/* Total Courses */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-2xl">
              <BookOpen size={28} />
            </div>

            <div>
              <p className=" text-slate-500 text-sm font-medium">
                Total Courses
              </p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stats.totalCourses}
              </h2>
            </div>
          </div>

          {/* Students */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-emerald-100 text-emerald-600 p-4 rounded-2xl">
              <Users size={28} />
            </div>

            <div>
              <p className="text-slate-500 text-sm font-medium">
                Total Students
              </p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stats.totalStudents}
              </h2>
            </div>
          </div>

          {/* Teachers */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl">
              <GraduationCap size={28} />
            </div>

            <div>
              <p className="text-slate-500 text-sm font-medium">
                Total Teachers
              </p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stats.totalTeachers}
              </h2>
            </div>
          </div>

          {/* Active Users */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-pink-100 text-pink-600 p-4 rounded-2xl">
              <Activity size={28} />
            </div>

            <div>
              <p className="text-slate-500 text-sm font-medium">Active Users</p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stats.activeUsers}
              </h2>
            </div>
          </div>
        </div>

        {/* Recent Courses */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Recent Courses</h2>

          <button
            onClick={() => navigate("/my-courses")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all"
          >
            View All
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {dummyCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Course Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Course Content */}
              <div className="p-5">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md uppercase tracking-wider">
                  Trending
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mt-3 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-slate-500 text-sm mt-1">
                  by {course.instructor}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                  <span className="text-sm font-bold text-slate-700">
                    {course.students} Students
                  </span>

                  <button
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="w-full sm:w-auto bg-indigo-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
