import { Blog } from "../interfaces/BlogInterface";

function BlogPost({ blog }: { blog: Blog }) {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white flex flex-col space-y-4">
      <div></div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-sm text-gray-700">{blog.author}</div>
          <div className="text-sm text-gray-500">{blog.content}</div>
        </div>
      </div>
      {/* <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md" /> */}
    </div>
  );
}

export default BlogPost;
