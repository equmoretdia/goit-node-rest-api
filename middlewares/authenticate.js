import jwt from "jsonwebtoken";

import { UsersModel } from "../models/usersModel.js";
import { HttpError } from "../helpers/HttpError.js";

const { SECRET_KEY } = process.env;

export const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await UsersModel.findById(id);
    if (!user) {
      next(HttpError(401));
    }
    next();
  } catch {
    next(HttpError(401));
  }
};
