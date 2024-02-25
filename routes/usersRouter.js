import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateSubscriptionUser,
} from "../controllers/usersControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { authenticate } from "../middlewares/authenticate.js";
import {
  registerSchema,
  loginSchema,
  updateSubscriptionUserSchema,
} from "../models/usersModel.js";

export const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), registerUser);

usersRouter.post("/login", validateBody(loginSchema), loginUser);

usersRouter.post("/logout", authenticate, logoutUser);

usersRouter.get("/current", authenticate, getCurrentUser);

usersRouter.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionUserSchema),
  updateSubscriptionUser
);
