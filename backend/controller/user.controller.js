import { User } from "../models/User.models.js";
import bcrypt from "bcrypt";
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if there is existing user
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password should be minimum of 6 caharcters" });
    }

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: "Password should be minimum of 6 caharcters" });
    }
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      name: name,
      email: email,
      password: hashedpassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
    res.end();
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// login controller

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!user || !comparePassword) {
      res.status(400).json({ message: "Invalid Username or password " });
    }
    res.status(200).json({
      messsage: "User Logged-in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("Error :", error);
    res.status(500).json({ message: "internal server error" });
  }
};
export default signup;
