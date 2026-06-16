import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  Plus,
  UserCheck,
  LogOut,
  User,
  Users,
  ChevronDown,
  ChevronUp,
  UserPlus,
} from "lucide-react";
import AddUserModal from "../../components/users/AddUserModal";

const Teachers = () => {
  const [showStudents, setShowStudents] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState("teacher");

  // ✅ localStorage data
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || [
      {
        id: 1,
        name: "Dr. Arvind Kumar",
        email: "arvind@example.com",
        subject: "Web Development",
      },
      {
        id: 2,
        name: "Neha Sharma",
        email: "neha@example.com",
        subject: "UI/UX Design",
      },
    ],
  );

  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || [
      {
        id: 101,
        name: "Rahul Verma",
        course: "React JS",
        batch: "Evening",
      },
      {
        id: 102,
        name: "Sneha Gupta",
        course: "Node JS",
        batch: "Morning",
      },
    ],
  );

  const currentUser = {
    role: "teacher",
    name: "Dr. Arvind Kumar",
  };

  // ✅ modal open
  const openModal = (role) => {
    setModalRole(role);
    setIsModalOpen(true);
  };

  // ✅ add user
  const handleAdd = (data) => {
    if (modalRole === "teacher") {
      const updatedTeachers = [
        ...teachers,
        {
          id: Date.now(),
          name: data.name,
          email: data.email,
          subject: data.subject || "New Subject",
        },
      ];

      setTeachers(updatedTeachers);
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
    } else {
      const updatedStudents = [
        ...students,
        {
          id: students.length + 101,
          name: data.name,
          course: data.course || "New Course",
          batch:
            new Date().getHours() < 12
              ? "Morning"
              : new Date().getHours() < 17
                ? "Afternoon"
                : "Evening",
        },
      ];

      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    }

    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-10">
        {/* Top */}
        <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
              <User size={20} />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">{currentUser.name}</h2>

              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full uppercase font-bold">
                {currentUser.role}
              </span>
            </div>
          </div>

          <button className="bg-red-50 text-red-600 px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Teacher Management
            </h1>

            <p className="text-slate-500 text-sm">Manage teachers & students</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openModal("student")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-indigo-700"
            >
              <UserPlus size={18} />
              Add Student
            </button>

            <button
              onClick={() => openModal("teacher")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 font-bold hover:bg-indigo-700"
            >
              <Plus size={18} />
              Add Teacher
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <UserCheck className="text-indigo-600" />
            </div>

            <div>
              <p className="text-slate-500 text-sm">Total Faculty</p>

              <h2 className="text-2xl font-bold">{teachers.length}</h2>
            </div>
          </div>

          <div
            onClick={() => setShowStudents(!showStudents)}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-xl">
                <Users className="text-emerald-600" />
              </div>

              <div>
                <p className="text-slate-500 text-sm">Students</p>

                <p className="text-emerald-600 font-bold text-sm">
                  {showStudents ? "Hide" : "View"}
                </p>
              </div>
            </div>

            {showStudents ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>

        {/* Students */}
        {showStudents && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
            <div className="bg-emerald-600 text-white font-bold p-4">
              Active Students
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-150">
                <thead className="bg-emerald-50 text-emerald-700">
                  <tr>
                    {["ID", "Name", "Course", "Batch", "Action"].map((item) => (
                      <th key={item} className="p-4 text-center text-sm">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {students.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50">
                      <td className="p-4 text-center">{s.id}</td>
                      <td className="p-4 text-center">{s.name}</td>
                      <td className="p-4 text-center">{s.course}</td>
                      <td className="p-4 text-center">{s.batch}</td>

                      <td className="p-4 text-center">
                        <button
                          onClick={() => {
                            const updatedStudents = students.filter(
                              (student) => student.id !== s.id,
                            );

                            setStudents(updatedStudents);

                            localStorage.setItem(
                              "students",
                              JSON.stringify(updatedStudents),
                            );
                          }}
                          className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Teachers */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 font-bold text-slate-800">Teachers List</div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-175">
              <thead className="bg-slate-100">
                <tr>
                  {["Name", "Email", "Subject"].map((item) => (
                    <th
                      key={item}
                      className="p-4 text-center text-sm text-slate-700"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50">
                    {[t.name, t.email, t.subject].map((item, i) => (
                      <td key={i} className="p-4 text-center break-words">
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <AddUserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          roleType={modalRole}
          onAdd={handleAdd}
        />
      </main>
    </div>
  );
};

export default Teachers;
