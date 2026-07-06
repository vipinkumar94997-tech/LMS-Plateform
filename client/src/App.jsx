// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Naye Imports (Teachers aur Students ke liye)
import AdminTeachers from "./pages/admin/teachers";
import AdminStudents from "./pages/admin/students";
import TeacherMyStudents from "./pages/teacher/mystudents";
import CourseDetail from "./pages/CourseDetail";
import AddCourse from "./pages/AddCourse";
import TestPage from "./pages/Testpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/test" element={<TestPage />} />

        {/* --- Naye Routes Start --- */}
        <Route path="/teachers" element={<AdminTeachers />} />
        <Route path="/students" element={<AdminStudents />} />
        <Route path="/teacher/my-students" element={<TeacherMyStudents />} />
        {/* --- Naye Routes End --- */}

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Note: Neeche waale duplicate routes ko aap hata sakte hain agar zaroorat na ho */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
