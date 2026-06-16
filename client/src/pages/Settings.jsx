// Settings.jsx

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(
    localStorage.getItem("emailNotifications") === "true",
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  // ✅ Dark mode apply
  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ✅ Notification Toggle
  const handleEmailNotification = () => {
    const updated = !emailNotifications;

    setEmailNotifications(updated);

    localStorage.setItem("emailNotifications", updated);
  };

  // ✅ Dark Toggle
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // ✅ Delete Account
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?",
    );

    if (!confirmDelete) return;

    localStorage.clear();

    alert("Account Deleted Successfully!");

    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full lg:ml-64 p-4 sm:p-6 lg:p-10">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
            Account Settings
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Manage your account preferences
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-4 sm:p-6 w-full max-w-3xl">
          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Email Notifications
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Receive updates about your courses
                </p>
              </div>

              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={handleEmailNotification}
                className="w-5 h-5 accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">
                  Dark Mode
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Switch to dark theme
                </p>
              </div>

              <input
                type="checkbox"
                checked={darkMode}
                onChange={handleDarkMode}
                className="w-5 h-5 accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Delete */}
            <button
              onClick={handleDeleteAccount}
              className="w-full sm:w-auto bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100"
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
