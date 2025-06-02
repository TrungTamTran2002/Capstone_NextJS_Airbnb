import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactNode } from "react";

// Component Layout chứa Header
interface WithHeaderProps {
  children: ReactNode;
}

const WithHeader = ({ children }: WithHeaderProps) => (
  <div className="">
    <Header />
    <div className="">{children}</div>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WithHeader>
                <HomePage />
              </WithHeader>
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
