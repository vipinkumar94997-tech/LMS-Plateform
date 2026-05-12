import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Sidebar from "../components/Sidebar";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourseData = async () => {
      try {
        setLoading(true);
        // APNI API KA URL YAHAN DALO (Example: http://localhost:5000/api/courses/${id})

        const response = await axios.get(
          `http://localhost:5000/api/courses/${id}`,
        );

        if (response.data) {
          setCourse(response.data);
        }
      } catch (error) {
        console.error("API Error:", error);
        // Error aane par purana dummy data dikhane ke liye (Optional)
      } finally {
        setLoading(false);
      }
    };

    if (id) getCourseData();
  }, [id]);

  if (loading)
    return <div className="p-10 text-center ml-72">Loading Course...</div>;
  if (!course)
    return <div className="p-10 text-center ml-72">Course not found!</div>;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 ml-72 overflow-x-hidden">
        {/* Banner Section */}
        <div className="h-80 bg-slate-900 relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 text-white flex items-center gap-2 hover:bg-white/10 p-2 rounded-lg z-10"
          >
            <ArrowLeft size={20} /> Back
          </button>
          {/* API se aayi thumbnail image */}
          <img
            src={course.thumbnail}
            className="w-full h-full object-cover opacity-40"
            alt={course.title}
          />
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl font-black mb-2">{course.title}</h1>
            <p className="text-slate-300 font-medium">
              Instructor: {course.instructor}
            </p>
          </div>
        </div>

        {/* Course Info Section */}
        <div className="max-w-6xl mx-auto p-10 grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              About this Course
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {course.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <Clock className="text-indigo-600" size={24} />
                <div>
                  <p className="text-xs font-bold text-slate-400">DURATION</p>
                  <p className="font-bold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <BookOpen className="text-indigo-600" size={24} />
                <div>
                  <p className="text-xs font-bold text-slate-400">LESSONS</p>
                  <p className="font-bold">{course.lessons} Videos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Status Card */}
          <div className="bg-white p-8 rounded-[32px] h-fit border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-slate-800">
              Course Status
            </h3>
            <button className="w-full bg-indigo-600 text-white p-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
              Start Learning Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;

// http://localhost:5000/api/courses   => api url
