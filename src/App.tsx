import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// Component Layout chứa Header
interface WithHeaderProps {
  children: ReactNode;
}

const WithHeader = ({ children }: WithHeaderProps) => (
  <div>
    <Header />
    {children}
    <Footer />
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
          path="*"
          element={
            <WithHeader>
              <NotFoundPage />
            </WithHeader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
