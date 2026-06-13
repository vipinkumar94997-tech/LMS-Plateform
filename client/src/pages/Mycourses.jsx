import Sidebar from "../components/Sidebar";
import { Search, Filter, PlayCircle } from "lucide-react";

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Fullstack Web Development",
      progress: 75,
      tutor: "Vipin Sisodiya",
      students: 120,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      progress: 40,
      tutor: "Anjali Sharma",
      students: 85,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
    },
    {
      id: 3,
      title: "React JS Advanced",
      progress: 90,
      tutor: "Vipin Sisodiya",
      students: 150,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    },
    {
      id: 4,
      title: "Node.js Backend Mastery",
      progress: 60,
      tutor: "Rahul Sharma",
      students: 200,
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="pt-20 lg:pt-10 lg:ml-64 lg:w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
              My Courses
            </h1>

            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              Continue learning and track your progress
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search courses..."
                className="w-full sm:w-72 pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <button className="w-full sm:w-auto bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* IMAGE */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow">
                  {course.progress}% Complete
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md uppercase tracking-wider">
                  Enrolled
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mt-3 line-clamp-2">
                  {course.title}
                </h3>

                <p className="text-slate-500 text-sm mt-1 break-words">
                  Instructor: {course.tutor}
                </p>

                <div className="flex items-center justify-between mt-4 text-sm gap-2">
                  <span className="text-slate-500">
                    {course.students} Students
                  </span>

                  <span className="font-bold text-indigo-600 whitespace-nowrap">
                    {course.progress}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                {/* Button */}
                <button className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95">
                  <PlayCircle size={20} />
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
