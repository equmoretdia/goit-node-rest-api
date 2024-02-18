import express from "express";
import {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contactsControllers.js";
import validateBody from "../helpers/validateBody.js";
import isValidId from "../helpers/isValidId.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../models/contactsModel.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.delete("/:id", isValidId, deleteContact);

export default contactsRouter;
