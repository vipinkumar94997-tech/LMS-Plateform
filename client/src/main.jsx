import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Global Dark Mode Initialize
const isDark = localStorage.getItem("darkMode") === "true";

document.documentElement.classList.toggle("dark", isDark);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
