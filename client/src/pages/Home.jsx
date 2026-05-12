// import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-black text-indigo-600">EDU-TECH</h1>
        <div className="space-x-4">
          <Link to="/login" className="px-5 py-2 text-indigo-600 font-semibold">
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-20 px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
          Master New Skills <br />{" "}
          <span className="text-indigo-600">Online with Ease</span>
        </h2>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Learn from the best instructors in the industry. Access courses in Web
          Development, Design, Fitness, and more.
        </p>
        <div className="mt-10 space-x-4">
          <Link
            to="/register"
            className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition-transform"
          >
            Start Learning Now
          </Link>
        </div>

        {/* Placeholder for an Image/Illustration */}
        <div className="mt-16 w-full max-w-4xl h-64 bg-indigo-50 rounded-3xl border-2 border-dashed border-indigo-200 flex items-center justify-center">
          <span className="text-indigo-300 font-medium italic">
            LMS Dashboard Preview Image
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
