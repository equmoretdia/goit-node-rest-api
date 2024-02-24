import express from "express";
import {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import { isValidId } from "../helpers/isValidId.js";
import {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} from "../models/contactsModel.js";

export const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateStatusContactSchema),
  updateStatusContact
);

contactsRouter.delete("/:id", isValidId, deleteContact);
