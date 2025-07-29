import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://baherozchat.netlify.app/api" : "https://baherozchat.netlify.app/api",
  withCredentials: true,
});
