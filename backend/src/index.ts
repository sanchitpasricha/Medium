import { Hono } from "hono";
import { userRouter } from "./routes/userRoutes";
import { blogRouter } from "./routes/blogRoutes";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api/v1");
app.use("*", cors());

app.route("/user", userRouter);
app.route("/blog", blogRouter);

export default app;
