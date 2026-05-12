import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  // 1. LocalStorage se data uthana
  const [name, setName] = useState(localStorage.getItem("userName") || "User");
  const [email, setEmail] = useState(
    localStorage.getItem("userEmail") || "user@example.com",
  );

  // 2. Edit mode check karne ke liye state
  const [isEditing, setIsEditing] = useState(false);

  // 3. Save function
  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    setIsEditing(false); // Edit mode band kar do
    alert("Profile Updated Successfully!");
    window.location.reload(); // Dashboard aur Sidebar mein naam update karne ke liye
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Personal Profile
        </h2>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden max-w-2xl">
          <div className="bg-indigo-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl font-bold text-indigo-600 border-4 border-white -mt-12">
                {name.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {/* --- Full Name Field --- */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 p-2 border-2 border-indigo-100 rounded-lg outline-none focus:border-indigo-600"
                  />
                ) : (
                  <p className="text-lg font-semibold text-slate-800">{name}</p>
                )}
              </div>

              {/* --- Email Field --- */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 p-2 border-2 border-indigo-100 rounded-lg outline-none focus:border-indigo-600"
                  />
                ) : (
                  <p className="text-lg font-semibold text-slate-800">
                    {email}
                  </p>
                )}
              </div>

              {/* --- Buttons --- */}
              <div className="pt-4 space-x-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-2 border-2 border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
