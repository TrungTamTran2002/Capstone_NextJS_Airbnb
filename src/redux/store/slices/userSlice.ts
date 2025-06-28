import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string; email: string }>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    loadUserFromStorage(state) {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          state.isLoggedIn = true;
          state.name = parsedData.name;
          state.email = parsedData.email;
        } catch (error) {
          console.error("Failed to parse user data from localStorage:", error);
          localStorage.removeItem("user"); // Xóa dữ liệu không hợp lệ
        }
      }
    },
  },
});

export const { login, logout, loadUserFromStorage } = userSlice.actions;

export default userSlice.reducer;
