import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

import { BookOpen, Users, GraduationCap, Activity } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [, setCourses] = useState([]);

  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalTeachers: 0,
    activeUsers: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // COURSES
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

        // USERS
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
            activeUsers,
          }));
        }
      } catch (err) {
        console.error("Dashboard Error:", err);
      }
    };

    fetchDashboardData();
  }, []);

  const chartData = [
    {
      name: "Courses",
      value: stats.totalCourses,
    },
    {
      name: "Students",
      value: stats.totalStudents,
    },
    {
      name: "Teachers",
      value: stats.totalTeachers,
    },
    {
      name: "Active Users",
      value: stats.activeUsers,
    },
  ];

  const colors = ["#4f46e5", "#10b981", "#f97316", "#ec4899"];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />

      <main className="lg:ml-64 w-full lg:w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-10">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800">
            Dashboard Overview
          </h1>

          <p className="text-slate-500 mt-2 text-sm sm:text-base">
            Welcome back! Here’s your LMS analytics overview.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-2xl">
              <BookOpen size={28} />
            </div>

            <div>
              <p className="text-slate-500 text-sm font-medium">
                Total Courses
              </p>

              <h2 className="text-3xl font-bold text-slate-800">
                {stats.totalCourses}
              </h2>
            </div>
          </div>

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

        {/* GRAPH */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-800">LMS Analytics</h2>

            <p className="text-slate-500 text-sm mt-1">
              Live platform statistics overview
            </p>
          </div>

          <div className="w-full h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {chartData.map((item, index) => (
                    <Cell key={index} fill={colors[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
