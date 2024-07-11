import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function postBlog(c: Context) {
  const userId = await c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const post = prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.json({
    id: (await post).id,
  });
}

export async function editBlog(c: Context) {
  return c.json({ message: "Edit an existing blog post" });
}

export async function findBlog(c: Context) {
  return c.json({ message: "Find a blog post by ID" });
}

export async function displayBlogs(c: Context) {
  return c.json({ message: "Display all blogs" });
}
