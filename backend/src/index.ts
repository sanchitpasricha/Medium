import { Hono } from "hono";
import { userSignin, userSignup } from "./controllers/userController";
import { displayBlogs, findBlog, postBlog } from "./controllers/blogController";
import { verify } from "hono/jwt";
import { Context } from "hono/jsx";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    SECRET: string;
  };
  Variables: {
    userId: any;
  };
}>().basePath("/api/v1");

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

  next();
}

app.use("/blog/*", authMiddleware);

app.post("/user/signup", userSignup);
app.post("/user/signin", userSignin);
app.post("/blog", postBlog).put(postBlog);
app.get("/blod/:id", findBlog);
app.get("/blog/bulk", displayBlogs);

export default app;
