import React from "react";
import Sidebar from "../Sidebar"; // ../ ka matlab ek folder piche (layout se bahar components mein)
import { LogOut, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  // Fake user data testing ke liye
  const user = { name: "Dr. Arvind Kumar", role: "teacher" };

  return (
    // 'flex' property sidebar aur content ko side-by-side rakhegi
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* 1. LEFT SIDEBAR (Fixed Width) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* 2. RIGHT SIDE CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP NAVBAR (Jo aapne screenshot mein dekha) */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-800">LMS Dashboard</h2>
            <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
              Vipin's EduTech
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                {user.name[0]}
              </div>
              <div className="hidden sm:block leading-none">
                <p className="text-sm font-bold text-slate-800">{user.name}</p>
                <p className="text-[10px] text-indigo-600 font-bold uppercase">
                  {user.role}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2.5 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all border border-red-100 shadow-sm"
            >
              <LogOut size={18} />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </header>

        {/* ACTUAL PAGE CONTENT (Yahan Teachers/Students load honge) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
