import { Blog } from "../interfaces/BlogInterface";

function BlogPost({ blog }: { blog: Blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>{blog.content}</h2>
    </div>
  );
}

export default BlogPost;
