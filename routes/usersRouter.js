import express from "express";
import { registerUser, loginUser } from "../controllers/usersControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { registerSchema, loginSchema } from "../models/usersModel.js";

export const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), registerUser);

usersRouter.post("/login", validateBody(loginSchema), loginUser);
