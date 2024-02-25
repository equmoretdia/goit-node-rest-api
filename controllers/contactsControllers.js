import { ContactsModel } from "../models/contactsModel.js";
import { HttpError } from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const contactsList = await ContactsModel.find({ owner });
  res.json(contactsList);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const searchedContact = await ContactsModel.findById(id);
  if (!searchedContact) {
    throw HttpError(404);
  }
  res.json(searchedContact);
};

const create = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await ContactsModel.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

const update = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }
  const { id } = req.params;
  const updatedContact = await ContactsModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404);
  }
  res.json(updatedContact);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const updatedContactStatus = await ContactsModel.findByIdAndUpdate(
    id,
    req.body,
    {
      new: true,
    }
  );
  if (!updatedContactStatus) {
    throw HttpError(404);
  }
  res.json(updatedContactStatus);
};

const del = async (req, res, next) => {
  const { id } = req.params;
  const removedContact = await ContactsModel.findByIdAndDelete(id);
  if (!removedContact) {
    throw HttpError(404);
  }
  res.json(removedContact);
};

export const getAllContacts = ctrlWrapper(getAll);
export const getOneContact = ctrlWrapper(getOne);
export const createContact = ctrlWrapper(create);
export const updateContact = ctrlWrapper(update);
export const updateStatusContact = ctrlWrapper(updateStatus);
export const deleteContact = ctrlWrapper(del);
