import React from "react";
import Sidebar from "../components/Sidebar";

const MyCourses = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Fullstack Web Development",
      progress: 75,
      tutor: "Vipin Sisodiya",
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      progress: 40,
      tutor: "Anjali Sharma",
    },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">My Learning</h2>

        <div className="grid grid-cols-1 gap-4">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Instructor: {course.tutor}
                </p>
                <div className="w-64 bg-slate-200 h-2 rounded-full mt-4">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-700">
                Continue ({course.progress}%)
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
