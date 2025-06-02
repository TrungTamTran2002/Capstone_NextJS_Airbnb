import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Thêm các reducer của bạn vào đây
    // Ví dụ: user: userReducer,
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
