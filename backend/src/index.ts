import { Hono } from "hono";
import { userSignin, userSignup } from "./controllers/userController";
import { displayBlogs, findBlog, postBlog } from "./controllers/blogController";

const app = new Hono().basePath("/api/v1");

app.post("/user/signup", userSignup);
app.post("/user/signin", userSignin);
app.post("/blog", postBlog).put(postBlog);
app.get("/blod/:id", findBlog);
app.get("/blog/bulk", displayBlogs);

export default app;
