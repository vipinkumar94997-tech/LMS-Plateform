import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  // ✅ Logged-in user data load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: localStorage.getItem("userName"),
      email: localStorage.getItem("userEmail"),
      role: localStorage.getItem("userRole"),
    };

    if (storedUser) {
      setUser(storedUser);
      setName(storedUser.name || "");
      setEmail(storedUser.email || "");
    }
  }, []);
  // ✅ Save Updated Profile
  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
    };

    // ✅ Main user object update
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // ✅ Separate keys bhi update
    localStorage.setItem("userName", updatedUser.name);
    localStorage.setItem("userEmail", updatedUser.email);
    localStorage.setItem("userRole", updatedUser.role || "student");

    // ✅ State update
    setUser(updatedUser);

    // ✅ Edit mode off
    setIsEditing(false);

    alert("Profile Updated Successfully!");

    // ✅ Sidebar + dashboard instant update
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen bg-slate-50 overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 w-full lg:ml-64 p-4 sm:p-6 lg:p-10">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Personal Profile
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Manage your personal information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden w-full max-w-3xl">
          {/* Top Banner */}
          <div className="bg-indigo-600 h-28 sm:h-32"></div>

          <div className="px-4 sm:px-6 lg:px-8 pb-8">
            {/* Avatar */}
            <div className="relative flex justify-center sm:justify-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl sm:text-3xl font-bold text-indigo-600 -mt-10 sm:-mt-12">
                {name?.charAt(0).toUpperCase()}
              </div>
            </div>

            {/* Fields */}
            <div className="mt-6 space-y-6">
              {/* Name */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Full Name
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-2 px-4 py-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-base sm:text-lg font-semibold text-slate-800 mt-1 break-words">
                    {name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Email Address
                </label>

                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 px-4 py-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  <p className="text-base sm:text-lg font-semibold text-slate-800 mt-1 break-all">
                    {email}
                  </p>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase">
                  User Role
                </label>

                <p className="text-base sm:text-lg font-semibold text-slate-800 mt-1 capitalize">
                  {user?.role || "Student"}
                </p>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                    >
                      Save Changes
                    </button>

                    <button
                      onClick={() => setIsEditing(false)}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300 transition-all"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
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
