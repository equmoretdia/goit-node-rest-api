import express from "express";
import { registerUser } from "../controllers/usersControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { registerSchema } from "../models/usersModel.js";

export const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), registerUser);
