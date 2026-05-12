import axios from "axios";

// 1. Base URL setup
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Add token to headers automatically (Interceptors)
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 3. Auth APIs
export const login = (formData) => API.post("/users/login", formData);
export const register = (formData) => API.post("/users/register", formData);

// 4. Course APIs (Naya Add-on)
export const getAllCourses = () => API.get("/courses");
export const getCourseById = (id) => API.get(`/courses/${id}`);
export const createCourse = (courseData) => API.post("/courses", courseData); // Admin Only

// 5. User Profile API (Naya Add-on)
export const getProfile = () => API.get("/users/profile");

export default API;
