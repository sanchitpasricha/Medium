import axios from "axios";
import { useEffect, useState } from "react";
import { Blog } from "../interfaces/BlogInterface";
import BlogPost from "./BlogPost";

function MainArea() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios
      .get("https://backend.sanchit0229.workers.dev/api/v1/blog/bulk")
      .then((response) => {
        setBlogs(response.data.blogs);
      });
  }, []);
  return (
    <div className="h-screen px-40 py-16">
      {blogs.map((blog) => (
        <BlogPost key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default MainArea;
