import Sidebar from "../components/Sidebar";

const AddCourse = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />

      <main className="pt-20 lg:pt-10 lg:ml-64 lg:w-[calc(100%-16rem)] p-4 sm:p-6 lg:p-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto">
          <h1 className="text-3xl font-black text-slate-800 mb-6">
            Add New Course
          </h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course Title
              </label>

              <input
                type="text"
                placeholder="Enter course title"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Instructor
              </label>

              <input
                type="text"
                placeholder="Instructor name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Students
              </label>

              <input
                type="number"
                placeholder="0"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Course Image URL
              </label>

              <input
                type="text"
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
