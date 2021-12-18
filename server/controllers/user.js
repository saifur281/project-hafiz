import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import UserModal from "../models/user.js";
import PostMessage from "../models/postMessage.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const fetchUser = async (req, res) => {
  try {
    const user = await UserModal.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const {
    email,
    // password,
    firstName,
    lastName,
    birthDate,
    profileImg,
    coverImg,
    followers,
    following,
    desc,
    city,
    homeTown,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  // const hashedPassword = await bcrypt.hash(password, 12);

  const updatedOneUser = {
    email,
    // password: hashedPassword,
    firstName,
    lastName,
    birthDate,
    profileImg,
    coverImg,
    followers,
    following,
    desc,
    city,
    homeTown,
    _id: id,
  };

  await UserModal.findByIdAndUpdate(id, updatedOneUser, { new: true });

  const token = jwt.sign(
    { email: updatedOneUser.email, id: updatedOneUser._id },
    secret,
    {
      expiresIn: "1h",
    }
  );
  res.json({ result: updatedOneUser, token });
};

export const getSingleUser = async (req, res) => {
  const userId = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(userId))
      return console.log("no user found");
    const user = await UserModal.findById(userId);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
