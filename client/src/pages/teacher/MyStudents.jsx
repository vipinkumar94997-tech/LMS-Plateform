// import React from "react";
import { GraduationCap, Award } from "lucide-react";

const MyStudents = () => {
  return (
    <div className="p-6">
      <div className="bg-gradient-to from-blue-600 to-indigo-700 p-8 rounded-2xl text-white mb-8 shadow-lg">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <GraduationCap size={32} /> My Class Students
        </h1>
        <p className="mt-2 opacity-90">
          Track your student's progress and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Progress Card */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full border-2 border-white shadow-sm"></div>
              <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded font-semibold uppercase tracking-wider">
                MERN Dev
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-800">
              Student Name {item}
            </h3>
            <p className="text-slate-500 text-sm mb-4">Performance: Good</p>

            <div className="w-full bg-slate-100 h-2 rounded-full mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
            </div>

            <button className="w-full py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 font-medium text-sm flex items-center justify-center gap-2">
              <Award size={16} /> View Grades
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStudents;
