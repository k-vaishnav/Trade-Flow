import express from "express";
import { signup, login } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/Auth.js";
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/verify", authMiddleware, (req, res) => {
  res.json({ status: true, user: req.user });
});
userRouter.get("/logout", (req, res) => {
  res.clearCookie("jwtToken", {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  res.json({ status: true, message: "Logged out" });
});

export default userRouter;
