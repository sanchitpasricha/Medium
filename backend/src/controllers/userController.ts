import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export async function userSignup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ userId: user.id }, c.env.SECRET);
    return c.json({ token });
  } catch (e) {
    return c.status(403);
  }

  return c.json({ body });
}

export async function userSignin(c: Context) {
  return c.json({ message: "User Signup Endpoint" });
}
