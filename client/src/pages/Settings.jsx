import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(
    localStorage.getItem("emailNotifications") === "true",
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  // ✅ Global Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ✅ Email Notification
  const handleEmailNotification = () => {
    const value = !emailNotifications;

    setEmailNotifications(value);

    localStorage.setItem("emailNotifications", value);
  };

  // ✅ Dark Mode
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ✅ Delete Account
  const handleDeleteAccount = () => {
    if (!window.confirm("Are you sure you want to delete account?")) return;

    localStorage.clear();

    alert("Account Deleted Successfully!");

    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-10">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
            Account Settings
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage your account preferences
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 max-w-3xl">
          <div className="space-y-6">
            {[
              {
                title: "Email Notifications",
                desc: "Receive updates about your courses",
                checked: emailNotifications,
                action: handleEmailNotification,
              },
              {
                title: "Dark Mode",
                desc: "Switch to dark theme",
                checked: darkMode,
                action: handleDarkMode,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={item.action}
                  className="w-5 h-5 accent-indigo-600 cursor-pointer"
                />
              </div>
            ))}

            {/* Delete Button */}
            <button
              onClick={handleDeleteAccount}
              className="w-full sm:w-auto bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition"
            >
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
