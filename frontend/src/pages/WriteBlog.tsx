import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WriteBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  function PostBlog() {
    axios
      .post(
        "https://backend.sanchit0229.workers.dev/api/v1/blog",
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        alert("Blog posted successfully");
        setTitle("");
        setContent("");
        navigate("/blogs");
      })
      .catch((error) => {
        console.error(
          "Error posting blog:",
          error.response ? error.response.data : error.message
        );
      });
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded shadow-md p-4 md:p-8">
        <div className="mb-4 md:mb-6">
          <input
            type="text"
            placeholder="Title"
            className="w-full text-2xl md:text-3xl font-serif text-gray-600 placeholder-gray-400 outline-none"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div>
          <textarea
            placeholder="Tell your story..."
            className="w-full h-48 md:h-64 text-base md:text-lg font-serif text-gray-600 placeholder-gray-400 outline-none resize-none"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          ></textarea>
        </div>
        <div className="mt-4 md:mt-6 flex justify-end">
          <button
            onClick={PostBlog}
            className="px-4 md:px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
