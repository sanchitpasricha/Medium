import { Blog } from "../interfaces/BlogInterface";

function BlogPost({ blog }: { blog: Blog }) {
  const displayName = blog.author.name;

  return (
    <div className=" py-10 flex flex-col space-y-4">
      <div className="flex flex-row items-center gap-4">
        <div className="bg-blue-400 text-white w-8 h-8 rounded-full flex justify-center items-center">
          {displayName[0]}
        </div>
        <div className="text-sm text-gray-700">{blog.author.name}</div>
      </div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-md text-gray-500">{blog.content}</div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
