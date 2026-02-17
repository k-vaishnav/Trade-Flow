import { signupUser, loginUser } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  try {
    const { name, email, DOB, password } = req.body;
    console.log(name, email, DOB, password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await signupUser({
      name,
      email,
      DOB,
      password: hashedPassword,
    });
    console.log(user);
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("jwtToken", token, {
      httpOnly: true,
      secure: true, // Always true on Render
      sameSite: "none", // Required for cross-domain cookies
      path: "/",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    return res
      .status(200)
      .json({ message: "User created successfully", success: true, user });
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await loginUser(email);
    if (!user) throw new Error("Incorrect Credentials");
    else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new Error("Incorrect Credentials");
      else {
        const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        res.cookie("jwtToken", token, {
          httpOnly: true,
          secure: true, // Always true on Render
          sameSite: "none", // Required for cross-domain cookies
          path: "/",
          maxAge: 1 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
          message: "User logged in successfully",
          success: true,
          user,
        });
      }
    }
  } catch (e) {
    next(e);
  }
};
