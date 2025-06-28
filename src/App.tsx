import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

// Component Layout chứa Header
interface WithHeaderProps {
  children: ReactNode;
}

const WithHeader = ({ children }: WithHeaderProps) => (
  <div>
    <Header />
    {children}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={1500} />
      <Routes>
        <Route
          path="/"
          element={
            <WithHeader>
              <HomePage />
            </WithHeader>
          }
        />
        <Route
          path="/about"
          element={
            <WithHeader>
              <div>About Page</div>
            </WithHeader>
          }
        />
        <Route
          path="/contact"
          element={
            <WithHeader>
              <div>Contact Page</div>
            </WithHeader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
