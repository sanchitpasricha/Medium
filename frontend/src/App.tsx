import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BlogPage from "./pages/BlogPage";
import WriteBlog from "./pages/WriteBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/write" element={<WriteBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
