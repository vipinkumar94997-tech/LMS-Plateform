import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Dashboard = () => {
  const [setCourses] = useState([]);
  const navigate = useNavigate();

  // Backend se courses fetch karna (Dummy data for example)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // 1. Backend API call (Apne backend ka sahi URL yahan dalo)
        const response = await axios.get("http://localhost:5000/api/courses");

        if (response.data && response.data.length > 0) {
          // Agar database mein data hai toh wo set karo
          setCourses(response.data);
        } else {
          // 2. Agar database khali hai toh testing ke liye ye dikhao
          // loadDummyData();
        }
      } catch (err) {
        console.error("API Error, loading dummy data instead:", err);
        // loadDummyData();
      }
    };

    // setCourses(dummyCourses);

    fetchCourses();
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
    {
      _id: "4",
      title: "React JS Advanced",
      instructor: "Vipin Sisodiya",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
      students: 150,
    },
    {
      _id: "5",
      title: "MySQL Database Design",
      instructor: "Sandeep Kumar",
      thumbnail:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
      students: 90,
    },
    {
      _id: "6",
      title: "Python for Data Science",
      instructor: "Rahul Sharma",
      thumbnail:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500",
      students: 310,
    },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-5">
        <h1 className="text-3xl font-black text-slate-800 mb-8">All Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dummyCourses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all group"
            >
              {/* --- COURSE IMAGE --- */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* --- COURSE CONTENT --- */}
              <div className="p-6">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md uppercase tracking-wider">
                  Trending
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-2 line-clamp-1">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  by {course.instructor}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-bold text-slate-700">
                    {course.students} Students
                  </span>

                  {/* --- VIEW COURSE BUTTON --- */}
                  <button
                    onClick={() => navigate(`/course/${course._id}`)}
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
