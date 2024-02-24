import bcrypt from "bcrypt";

import { UsersModel } from "../models/usersModel.js";
import { HttpError } from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

const register = async (req, res) => {
  const { email, password } = req.body;
  const registeredEmail = await UsersModel.findOne({ email });
  if (registeredEmail) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await UsersModel.create({
    ...req.body,
    password: hashPassword,
  });
  res.status(201).json({ name: newUser.name, email: newUser.email });
};

export const registerUser = ctrlWrapper(register);
