import { LoginRequest, RegisterRequest } from "../types/authentication";
import https from "./apiConfig";

// Login service với types từ file types
export const loginService = (loginData: LoginRequest) => {
  console.log("Login Data:", loginData);
  return https.post("auth/signin", loginData);
};

// Register service với types từ file types
export const registerService = (registerData: RegisterRequest) => {
  return https.post("auth/signup", registerData);
};
