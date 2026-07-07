import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    tutor: "",
    students: "",
    progress: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCourses = JSON.parse(
      localStorage.getItem("customCourses") || "[]",
    );

    const newCourse = {
      id: Date.now(),
      title: formData.title,
      tutor: formData.tutor,
      students: Number(formData.students) || 0,
      progress: Math.min(100, Math.max(0, Number(formData.progress) || 0)),
      image:
        formData.image ||
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500",
    };

    const updatedCourses = [...existingCourses, newCourse];
    localStorage.setItem("customCourses", JSON.stringify(updatedCourses));

    navigate("/my-courses");
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />

      <main className="pt-20 lg:pt-10 lg:ml-64 lg:w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-black text-slate-800 mb-6">
            Add New Course
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter course title"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Instructor
              </label>
              <input
                type="text"
                name="tutor"
                value={formData.tutor}
                onChange={handleChange}
                placeholder="Instructor name"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Students
              </label>
              <input
                type="number"
                name="students"
                value={formData.students}
                onChange={handleChange}
                placeholder="0"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Progress (%)
              </label>
              <input
                type="number"
                name="progress"
                value={formData.progress}
                onChange={handleChange}
                placeholder="0 - 100"
                min="0"
                max="100"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course Image URL
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
            >
              Add Course
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
