import https from "./apiConfig";

// Lấy danh sách địa điểm
export const getLocations = () => {
  return https.get("vi-tri");
};
