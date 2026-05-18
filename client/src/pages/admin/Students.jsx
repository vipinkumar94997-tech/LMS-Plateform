import { useState } from "react";
// 🚨 SABSE IMPORTANT: Pehle check karo ye import sahi hai ya nahi!
import Sidebar from "../components/Sidebar";
import {
  UserPlus,
  Filter,
  Search,
  Trash2,
  Edit,
  GraduationCap,
  LogOut,
} from "lucide-react";

const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};

const Students = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Vipin Sisodiya",
      email: "vipin@test.com",
      course: "MERN Stack",
      date: "2026-05-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Kumar",
      email: "amit@test.com",
      course: "React.JS",
      date: "2026-04-15",
      status: "Pending",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] w-full overflow-x-hidden">
      {/* 🚨 AGAR YAHAN SIDEBAR KHALI REH JAYEGA TOH SCREEN PAR KUCH NAHI DIKHEGA */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-72 p-10 animate-in fade-in duration-500">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <GraduationCap className="text-indigo-600" size={32} />
              Student Directory
            </h1>
            <p className="text-slate-500 text-sm">
              Manage enrollments, courses, and student records
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all font-bold active:scale-95">
              <UserPlus size={20} />
              Add New Student
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-xl font-bold hover:bg-red-50 transition-all border border-slate-200 shadow-sm"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* --- Search & Filter Bar --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students by name, email or course..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-slate-600 font-semibold hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* --- Table Section --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Student Info
                  </th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Joining Date
                  </th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                    Status
                  </th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {students.map((s) => (
                  <tr
                    key={s.id}
                    className="hover:bg-indigo-50/20 transition-colors group"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
                          {s.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 leading-none mb-1">
                            {s.name}
                          </p>
                          <p className="text-xs text-slate-400">{s.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200">
                        {s.course}
                      </span>
                    </td>
                    <td className="p-5 text-sm text-slate-500 font-medium">
                      {s.date}
                    </td>
                    <td className="p-5 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          s.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;
