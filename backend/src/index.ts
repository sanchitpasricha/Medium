import { Hono } from "hono";
import { userRouter } from "./routes/userRoutes";
import { blogRouter } from "./routes/blogRoutes";

const app = new Hono().basePath("/api/v1");

app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
