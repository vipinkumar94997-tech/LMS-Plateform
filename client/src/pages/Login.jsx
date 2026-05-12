import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Backend API Call
      const { data } = await login({ email, password });

      // 2. Role decide karna (Backend se aaye toh wo, nahi toh email ke basis par)
      // Testing Tip: admin@test.com se login karoge toh admin banoge
      // teacher@test.com se login karoge toh teacher banoge
      let assignedRole = data.role;

      if (!assignedRole) {
        if (email.includes("admin")) assignedRole = "admin";
        else if (email.includes("teacher")) assignedRole = "teacher";
        else assignedRole = "student";
      }

      // 3. Data save karna
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.name || email.split("@")[0], // Naam na ho toh email ka pehla part
          email: data.email || email,
          role: assignedRole,
        }),
      );

      alert(`Login Successful as ${assignedRole}!`);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err);

      // BACKUP LOGIC (Testing ke liye jab backend band ho)
      let dummyRole = "student";
      if (email.includes("admin")) dummyRole = "admin";
      else if (email.includes("teacher")) dummyRole = "teacher";

      const dummyUser = {
        name: email.split("@")[0],
        role: dummyRole,
        email: email,
      };

      localStorage.setItem("user", JSON.stringify(dummyUser));
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 font-sans">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-slate-200"
      >
        <h2 className="text-3xl font-black mb-2 text-center text-indigo-600 tracking-tight">
          LMS Login
        </h2>
        <p className="text-center text-slate-500 text-sm mb-8 font-medium">
          Enter your credentials to continue
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mt-1 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 mt-1 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 mt-4">
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
