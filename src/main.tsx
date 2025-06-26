import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import App from "./App";
import { loadUserFromStorage } from "./redux/store/slices/userSlice";

// Load user data from localStorage when the app starts
store.dispatch(loadUserFromStorage());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
