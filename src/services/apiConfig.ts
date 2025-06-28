import axios from "axios";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjA1LzA5LzIwMzAiLCJIZXRIYW5UaW1lIjoiMTc1NzAzMDQwMDAwMCIsIm5iZiI6MTcyOTcyODAwMCwiZXhwIjoxNzU3MjAzMjAwfQ.mkZLd8oHfjcSyVnxGP6hVb1T1D0uLZPhru7xOXyc7TQ";

// Tạo instance Axios đơn giản
const https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

// Thêm interceptor để xử lý lỗi toàn cục
https.interceptors.request.use(
  (config) => {
    // Có thể thêm logic trước khi gửi request
    return config;
  },
  (error) => {
    // Xử lý lỗi request
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => {
    // Có thể thêm logic xử lý response
    return response;
  },
  (error) => {
    console.error("API Error:", error.response); // Log chi tiết lỗi từ API
    console.log("Api lỗi"); // Log thông báo lỗi chung
    return Promise.reject(error);
  }
);

export default https;
