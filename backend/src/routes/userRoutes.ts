import { Hono } from "hono";
import { userSignin, userSignup } from "../controllers/userController";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

userRouter.post("/signup", userSignup);
userRouter.post("/signin", userSignin);
