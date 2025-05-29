import axios from "axios";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjA1LzA5LzIwNTAiLCJIZXRIYW5UaW1lIjoiMTc1NzAzMDQwMDAwMCIsIm5iZiI6MTcyOTcyODAwMCwiZXhwIjoxNzU3MjAzMjAwfQ.0jUDN2s4Z5NNMLMmIPRvjWX17c2F-CA-49J6mWfNy3E";

// Tạo instance Axios đơn giản
const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    'Content-Type': 'application/json'
  },
});

// Interceptor đơn giản cho request
https.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage nếu có
    const token = localStorage.getItem('userToken');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor đơn giản cho response
https.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi đơn giản
    if (error.response?.status === 401) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
    }
    return Promise.reject(error);
  }
);

export default https;