import axios from "axios";
import https from "https";

const axiosInstance = axios.create({
  // baseURL: process.env.baseURL || "http://localhost:3001/",
  baseURL: "https://aronserver-2.onrender.com/",
  timeout: 360000,
  httpsAgent: new https.Agent({ keepAlive: true }),
});

// Request interceptor to include Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const storedData = localStorage.getItem("persist:test");
    // @ts-ignore
    const parsedData = JSON.parse(storedData); 
    const token = parsedData.accessToken; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle errors during request configuration
    return Promise.reject(error);
  }
);

// Optional: Add response interceptor for centralized error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: Handle 401 errors globally
    if (error.response?.status === 401) {
      // window.location.replace("/auth/signin");
    }
    return Promise.reject(error);
  }
);

export {axiosInstance}