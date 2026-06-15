import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "My Courses",
      path: "/my-courses",
      icon: <BookOpen size={20} />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <GraduationCap size={20} />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <Users size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 z-50 flex items-center justify-between px-4 border-b border-slate-800">
        <h1 className="text-white text-xl font-black">LMS Panel</h1>

        <button onClick={() => setOpen(true)}>
          <Menu size={28} className="text-white" />
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white z-50
          border-r border-slate-800
          transform transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
        `}
      >
        {/* LOGO */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <h1 className="text-2xl font-black">LMS Panel</h1>

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-120px)] p-4">
          {/* TOP MENU */}
          <div className="flex flex-col gap-2">
            {menuItems.slice(0, 4).map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
          flex items-center gap-3 px-4 py-3 rounded-2xl
          font-semibold transition-all duration-200

          ${
            isActive
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }
        `
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* BOTTOM MENU */}
          <div className="flex flex-col gap-2 mb-3">
            {menuItems.slice(4).map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
          flex items-center gap-3 px-4 py-3 rounded-2xl
          font-semibold transition-all duration-200

          ${
            isActive
              ? "bg-indigo-600 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }
        `
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* LOGOUT */}
        <div className="absolute bottom-5 left-0 w-full px-4">
          <button
            className="
              w-full flex items-center gap-3
              px-4 py-3 rounded-2xl
              bg-red-500/10 text-red-400
              hover:bg-red-500 hover:text-white
              transition-all font-semibold
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
