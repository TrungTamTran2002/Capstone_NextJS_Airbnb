export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  avatar?: string;
}
