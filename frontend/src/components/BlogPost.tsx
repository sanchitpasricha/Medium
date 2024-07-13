import { Blog } from "../interfaces/BlogInterface";

function BlogPost({ blog }: { blog: Blog }) {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={
            "https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"
          }
          alt="Post"
          className="w-16 h-16 object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-600">{blog.content}</p>
          <div className="text-gray-500 text-sm"></div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-yellow-500">⭐</button>
        <button className="text-gray-500">👏</button>
        <button className="text-gray-500">➖</button>
        <button className="text-gray-500">🔖</button>
        <button className="text-gray-500">•••</button>
      </div>
    </div>
  );
}

export default BlogPost;
