import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://baherozchat.onrender.com/api" : "https://baherozchat.onrender.com/api",
  withCredentials: true,
});
