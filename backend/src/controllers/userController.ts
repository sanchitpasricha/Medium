import { Context } from "hono";

export async function userSignup(c: Context) {
  return c.json({ message: "Signup Routes" });
}

export async function userSignin(c: Context) {
  return c.json({ message: "User Signup Endpoint" });
}
