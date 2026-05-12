import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  GraduationCap,
  Users,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initial state ko khali rakha hai taaki crash na ho
  const [user, setUser] = useState({
    name: "",
    role: "",
  });

  useEffect(() => {
    const fetchUserData = () => {
      try {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setUser({
            name: parsedUser.name || "User",
            role: parsedUser.role || "Guest",
          });
        }
      } catch (err) {
        console.error("Error loading user:", err);
      }
    };

    fetchUserData();
  }, []);

  const allMenuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/dashboard",
      roles: ["admin", "teacher", "student"],
    },
    {
      icon: <BookOpen size={20} />,
      label: "My Courses",
      path: "/courses",
      roles: ["admin", "teacher", "student"],
    },
    {
      icon: <GraduationCap size={20} />,
      label: "Teachers",
      path: "/teachers",
      roles: ["admin"],
    },
    {
      icon: <Users size={20} />,
      label: "Students",
      path: "/students",
      roles: ["admin", "teacher"],
    },
  ];

  // Role check: Agar role nahi mila toh default "student" ke items dikhao
  const currentRole = user.role.toLowerCase() || "student";
  const menuItems = allMenuItems.filter((item) =>
    item.roles.includes(currentRole),
  );

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      window.location.href = "/login"; // Force redirect
    }
  };

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col p-4 sticky top-0 border-r border-slate-800">
      <h1 className="text-2xl font-bold mb-10 text-indigo-400 px-2 tracking-tight text-left">
        EduTech LMS
      </h1>

      <nav className="flex-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 shadow-lg shadow-indigo-900/50 text-white"
                  : "hover:bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 pt-4 space-y-2">
        <div
          onClick={() => navigate("/settings")}
          className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${
            location.pathname === "/settings"
              ? "text-indigo-400 bg-slate-800/30"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Settings size={20} />
          <span className="font-medium text-left">Settings</span>
        </div>

        {/* --- DYNAMIC PROFILE CARD --- */}
        <div
          onClick={() => navigate("/profile")}
          className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl border border-slate-700 cursor-pointer hover:border-indigo-500 transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center font-bold border border-indigo-400 uppercase text-lg">
            {user.name ? user.name[0] : "U"}
          </div>
          <div className="flex-1 overflow-hidden text-left">
            <p className="text-sm font-bold truncate">
              {user.name || "Loading..."}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-indigo-400 font-black">
              {user.role || "Admin"}
            </p>
          </div>
        </div>

        <div
          onClick={handleLogout}
          className="flex items-center gap-4 p-3 hover:bg-red-500/10 rounded-xl cursor-pointer text-red-400 transition-all font-bold"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
