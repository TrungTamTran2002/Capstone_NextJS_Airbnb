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
// Thêm interceptor để xử lý lỗi toàn cục
https.interceptors.request.use(
  (config) => {
    // Có thể thêm logic trước khi gửi request
    return config;
  }
  , (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => {
    // Có thể thêm logic xử lý response
    return response;
  },
  (error) => {
    // Xử lý lỗi response
    if (error.response) {
      // Lỗi từ server
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      console.error("Network Error:", error.request);
    } else {
      // Lỗi khác
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);
export default https;