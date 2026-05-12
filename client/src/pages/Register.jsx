import { useState } from "react";
import { register } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // Default role 'student' rakha hai
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ab ye formData mein 'role' bhi backend ko jayega
      const res = await register(formData);
      if (res.data) {
        alert(`Registration Successful as ${formData.role}! Now Login.`);
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-50 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200"
      >
        <h2 className="text-3xl font-black mb-2 text-indigo-700 text-center tracking-tight">
          Create Account
        </h2>
        <p className="text-center text-slate-500 text-sm mb-8 font-medium">
          Join our LMS community today
        </p>

        <div className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Vipin Sisodiya"
              className="w-full border p-3 mt-1 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="vipin@example.com"
              className="w-full border p-3 mt-1 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* Role Selection Dropdown - YE NAYA ADD KIYA HAI */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              I am a...
            </label>
            <select
              className="w-full border p-3 mt-1 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none bg-white cursor-pointer font-medium text-slate-700 transition-all"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border p-3 mt-1 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-100 active:scale-95 mt-2">
            Register Now
          </button>
        </div>

        <p className="mt-6 text-center text-slate-600 text-sm font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-bold hover:underline"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
