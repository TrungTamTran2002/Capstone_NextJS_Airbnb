import axios from "axios";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjA1LzA5LzIwNTAiLCJIZXRIYW5UaW1lIjoiMTc1NzAzMDQwMDAwMCIsIm5iZiI6MTcyOTcyODAwMCwiZXhwIjoxNzU3MjAzMjAwfQ.0jUDN2s4Z5NNMLMmIPRvjWX17c2F-CA-49J6mWfNy3E";

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
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  (response) => {
    // Có thể thêm logic xử lý response
    return response;
  },
  (error) => {
    console.log("Api lỗi");
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default https;
