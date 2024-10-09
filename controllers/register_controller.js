import { User } from "../models/register_model.js";
import path from "path";
import { fileURLToPath } from "url";
import bcryptjs from "bcryptjs";
import { validateUser } from "../utils/validation/user_validation.js";
import { validateLogin } from "../utils/validation/user_validation.js";
import jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hash Password:-

const securedPassword = async (password) => {
  try {
    const hashPassword = await bcryptjs.hash(password, 10);
    return hashPassword;
  } catch (error) {
    console.log(error.message);
  }
};

// Signup:-

const SignUp = async (req, resp) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return resp.status(400).send({ message: error.details[0].message });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return resp.status(400).send({ message: "Email already exists" });
    }

    const hashedPassword = await securedPassword(req.body.password);
    const profile_Picture = req.file ? req.file.filename : null;

    const user = new User({
      ...req.body,
      password: hashedPassword,
      profile_Picture,
    });

    const savedUser = await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return resp.status(201).send({
      message: "Saved successfully",
      user: savedUser,
      token: token,
    });
  } catch (error) {
    console.error("SignUp Error:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
};

// LogIn:-

const LogIn = async (req, resp) => {
  try {
    const { error } = validateLogin(req.body);
    if (error) {
      return resp.status(400).send({ message: error.details[0].message });
    }

    const { email, password } = req.body;
    const data = await User.findOne({ email: email });

    if (!data) {
      return resp.status(400).send({ message: "Email does not exist" });
    }

    const isMatch = await bcryptjs.compare(password, data.password);
    if (!isMatch) {
      return resp.status(400).send({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: data._id, email: data.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return resp.status(200).send({
      message: "Login successful",
      user: data,
      token: token,
    });
  } catch (error) {
    console.error("LogIn Error:", error);
    return resp.status(500).send({ message: "Internal server error" });
  }
};

export { SignUp, LogIn };
