import React from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Account Settings
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-3xl">
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h4 className="font-bold text-slate-800">
                  Email Notifications
                </h4>
                <p className="text-sm text-slate-500">
                  Receive updates about your courses.
                </p>
              </div>
              <input
                type="checkbox"
                className="w-5 h-5 accent-indigo-600"
                defaultChecked
              />
            </div>

            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <h4 className="font-bold text-slate-800">Dark Mode</h4>
                <p className="text-sm text-slate-500">
                  Switch to a dark theme interface.
                </p>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
            </div>

            <button className="bg-red-50 text-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-100 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
