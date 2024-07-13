import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import BlogPost from "../components/BlogPost";
import { Blog } from "../interfaces/BlogInterface";

function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios
      .get("https://backend.sanchit0229.workers.dev/api/v1/blog/bulk")
      // .get("http://localhost:8787/api/v1/blog/bulk")
      .then((response) => {
        setBlogs(response.data.blogs);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      {blogs.map((blog) => {
        return <BlogPost key={blog.id} blog={blog} />;
      })}
    </div>
  );
}

export default BlogPage;
