import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export async function userSignup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { email, password } = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    const token = await sign({ userId: user.id }, c.env.SECRET);
    return c.json({ token });
  } catch (e) {
    return c.status(403);
  }
}

export async function userSignin(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { email, password } = await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email: email, password: password },
    });
    if (user) {
      const jwt = await sign({ userId: user.id }, c.env.SECRET);
      return c.json({ token: jwt });
    } else {
      return c.status(403);
    }
  } catch (e) {
    console.log(e);
  }
}
