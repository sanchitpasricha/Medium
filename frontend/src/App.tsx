import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
