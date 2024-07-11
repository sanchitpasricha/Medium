import { Hono } from "hono";
import { verify } from "hono/jwt";
import {
  displayBlogs,
  editBlog,
  findBlog,
  postBlog,
} from "../controllers/blogController";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
}>();

async function authMiddleware(c: any, next: any) {
  const token = c.req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return c.json({ message: "Unauthorized" });
  }
  const payload = await verify(token, c.env.SECRET);
  if (!payload) {
    return c.json({ message: "Invalid token" });
  }
  c.set("userId", payload.userId);

  await next();
}
blogRouter.get("/bulk", displayBlogs);

blogRouter.use("/*", authMiddleware);

blogRouter.post("/", postBlog).put(editBlog);
blogRouter.get("/:id", findBlog);
