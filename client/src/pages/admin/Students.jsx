import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  Filter,
  Search,
  Trash2,
  Edit,
  GraduationCap,
  LogOut,
} from "lucide-react";

const Students = () => {
  const [students, setStudents] = useState([
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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  // 🔎 SEARCH + FILTER LOGIC
  const filteredStudents = students.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase());

    const matchFilter = filter === "ALL" ? true : s.status === filter;

    return matchSearch && matchFilter;
  });

  // ❌ DELETE
  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // ✏️ EDIT (demo action)
  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    setStudents(
      students.map((s) => (s.id === id ? { ...s, name: newName } : s)),
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="flex-1 w-full lg:ml-64 p-4 sm:p-6 lg:p-10 overflow-x-hidden">
        {" "}
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <GraduationCap className="text-indigo-600" />
              Student Directory
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Manage enrollments, courses, and students
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white text-red-600 px-4 py-3 rounded-xl font-bold"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search students..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl"
            />
          </div>

          <button
            onClick={() =>
              setFilter(
                filter === "ALL"
                  ? "Active"
                  : filter === "Active"
                    ? "Pending"
                    : "ALL",
              )
            }
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl"
          >
            <Filter size={18} />
            {filter === "ALL" ? "All" : filter}
          </button>
        </div>
        {/* TABLE */}
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
          <table className="w-full table-fixed ">
            <thead>
              <tr className="text-slate-500 text-sm">
                <th className="p-4 text-left w-[25%]">Student</th>
                <th className="text-left w-[20%]">Course</th>
                <th className="text-left w-[20%]">Date</th>
                <th className="text-left w-[15%]">Status</th>
                <th className=" w-[10%] ">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((s) => (
                <tr key={s.id} className="border-t">
                  <td className="p-4">
                    <div>
                      <p className="font-bold">{s.name}</p>
                      <p className="text-xs text-slate-400">{s.email}</p>
                    </div>
                  </td>

                  <td>{s.course}</td>
                  <td>{s.date}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>

                  <td className="text-right p-4 flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(s.id)}
                      className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(s.id)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Students;
