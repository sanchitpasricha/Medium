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
    <div className="w-full h-screen grid grid-cols-3">
      <div className="w-50 col-span-2">
        {blogs.map((blog) => (
          <BlogPost key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="w-50 "></div>
    </div>
  );
}

export default MainArea;
