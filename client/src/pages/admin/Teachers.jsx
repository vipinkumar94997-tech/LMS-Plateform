import { useState } from "react";
import {
  Plus,
  UserCheck,
  LogOut,
  User as UserIcon,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import AddUserModal from "../../components/users/AddUserModal.jsx";

const Teachers = () => {
  const [currentUser] = useState({
    role: "teacher",
    name: "Dr. Arvind Kumar",
    email: "arvind@example.com",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // --- TOGGLE STATE ---
  const [showStudents, setShowStudents] = useState(false);

  const [teachers] = useState([
    {
      id: 1,
      name: "Dr. Arvind Kumar",
      email: "arvind@example.com",
      subject: "Web Development",
      status: "Active",
    },
    {
      id: 2,
      name: "Ms. Neha Sharma",
      email: "neha@example.com",
      subject: "UI/UX Design",
      status: "Active",
    },
  ]);

  // Mock Students Data
  const students = [
    { id: 101, name: "Rahul Verma", course: "React JS", batch: "Evening" },
    { id: 102, name: "Sneha Gupta", course: "Node JS", batch: "Morning" },
    { id: 103, name: "Amit Singh", course: "MySQL", batch: "Evening" },
  ];

  const isAdmin = currentUser.role === "admin";

  return (
    <div className="p-6 min-h-screen bg-slate-50">
      {/* 1. TOP BAR */}
      <div className="flex flex-wrap justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-md">
            <UserIcon size={20} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800 leading-tight">
              {currentUser.name}
            </h2>
            <span className="text-[10px] bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {currentUser.role}
            </span>
          </div>
        </div>
        <button
          onClick={() => alert("Logging out...")}
          className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all border border-red-100 group"
        >
          <LogOut
            size={18}
            className="group-hover:rotate-12 transition-transform"
          />
          <span>Logout</span>
        </button>
      </div>

      {/* 2. HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {isAdmin ? "Teacher Management" : "My Dashboard"}
          </h1>
          <p className="text-slate-500 text-sm">
            {isAdmin
              ? "Manage faculty members"
              : "Review your profile and students"}
          </p>
        </div>
        {isAdmin && (
          <button
            onClick={() => {
              setSelectedTeacher(null);
              setIsModalOpen(true);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-lg font-semibold transition-all"
          >
            <Plus size={20} strokeWidth={3} /> Add New Teacher
          </button>
        )}
      </div>

      {/* 3. STATS CARDS WITH TOGGLE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
            <UserCheck size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Total Faculty</p>
            <p className="text-2xl font-bold text-slate-900">
              {teachers.length}
            </p>
          </div>
        </div>

        {/* --- CLICKABLE CARD --- */}
        <div
          onClick={() => setShowStudents(!showStudents)}
          className={`p-5 rounded-2xl shadow-sm border transition-all group cursor-pointer flex items-center justify-between ${showStudents ? "bg-emerald-50 border-emerald-300" : "bg-white border-slate-200 hover:border-emerald-300"}`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-xl transition-colors ${showStudents ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-600 group-hover:scale-110"}`}
            >
              <Users size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">
                Active Students
              </p>
              <p className="text-sm font-bold text-emerald-600">
                {showStudents ? "Hide List" : "Click to View"}
              </p>
            </div>
          </div>
          {showStudents ? (
            <ChevronUp className="text-emerald-600" />
          ) : (
            <ChevronDown className="text-slate-300" />
          )}
        </div>
      </div>

      {/* --- CONDITIONAL STUDENTS LIST --- */}
      {showStudents && (
        <div className="mb-8 animate-in slide-in-from-top duration-300">
          <div className="bg-white rounded-2xl shadow-md border border-emerald-100 overflow-hidden">
            <div className="bg-emerald-600 p-4">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Users size={18} /> My Active Students
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-emerald-50 text-emerald-700 text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4 text-center w-16">ID</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Enrolled Course</th>
                    <th className="p-4">Batch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map((s) => (
                    <tr
                      key={s.id}
                      className="hover:bg-emerald-50/50 transition-colors"
                    >
                      <td className="p-4 text-center font-bold text-slate-400">
                        {s.id}
                      </td>
                      <td className="p-4 font-semibold text-slate-800">
                        {s.name}
                      </td>
                      <td className="p-4">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold">
                          {s.course}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500 text-sm">{s.batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 4. TABLE SECTION */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-700">
            {isAdmin ? "All Registered Instructors" : "My Professional Profile"}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase">
                  Instructor
                </th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase">
                  Contact
                </th>
                <th className="p-4 font-bold text-slate-600 text-sm uppercase">
                  Expertise
                </th>
                {isAdmin && (
                  <th className="p-4 font-bold text-slate-600 text-sm uppercase text-right">
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {teachers
                .filter((t) => (isAdmin ? true : t.email === currentUser.email))
                .map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold border border-indigo-100">
                          {t.name[0]}
                        </div>
                        <span className="font-semibold text-slate-800">
                          {t.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">{t.email}</td>
                    <td className="p-4 text-slate-600 font-medium">
                      {t.subject}
                    </td>
                    {isAdmin && (
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedTeacher(t);
                            setIsModalOpen(true);
                          }}
                          className="text-indigo-600 hover:text-indigo-800 font-bold text-sm bg-indigo-50 px-4 py-1.5 rounded-lg border border-indigo-100"
                        >
                          Edit
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTeacher(null);
        }}
        onAdd={(data) => console.log(data)}
        roleType="teacher"
        initialData={selectedTeacher}
      />
    </div>
  );
};

export default Teachers;
