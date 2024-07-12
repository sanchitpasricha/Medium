import { Context } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@sanchitpasricha/validcheck-common";

export async function userSignup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid input" });
  }
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
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

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(403);
    return c.json({ message: "Invalid input" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: body.email, password: body.password },
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
