import { useState, useEffect } from "react";
import { X, User, Mail, Lock, Briefcase } from "lucide-react";

const AddUserModal = ({ isOpen, onClose, roleType, onAdd, initialData }) => {
  // Initial state empty rakhi hai
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subject: "",
    role: roleType,
  });

  // Jab Modal khule ya initialData (Edit mode) change ho, tab data bharein
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        subject: initialData.subject || "",
        password: "", // Security ke liye password khali hi rakhein
        role: roleType,
      });
    } else {
      // Add mode ke liye form reset
      setFormData({
        name: "",
        email: "",
        password: "",
        subject: "",
        role: roleType,
      });
    }
  }, [initialData, isOpen, roleType]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) {
      onAdd(formData);
    }
    alert(`${roleType} ${initialData ? "updated" : "added"} successfully!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="bg-indigo-600 p-5 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold capitalize">
              {initialData ? `Edit ${roleType}` : `Add New ${roleType}`}
            </h2>
            <p className="text-xs text-indigo-100 opacity-80 font-medium">
              {initialData
                ? "Update existing account details"
                : "Enter details to create an account"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-4 bg-white text-slate-800 text-left"
        >
          {/* Name Field */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-slate-700">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="John Doe"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-slate-700">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                required
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="email@example.com"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subject Field (Only for Teachers) */}
          {roleType === "teacher" && (
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-700">
                Subject/Expertise
              </label>
              <div className="relative">
                <Briefcase
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="e.g. Mathematics"
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-slate-700">
              {initialData ? "New Password (Optional)" : "Temporary Password"}
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-3 text-slate-400"
                size={18}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                required={!initialData} // Edit mode mein password mandatory nahi hai
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl border border-slate-200 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              {initialData ? "Update Teacher" : `Add ${roleType}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
