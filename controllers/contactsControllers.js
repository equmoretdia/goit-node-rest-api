import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res) => {
  const contactsList = await contactsService.listContacts();
  res.json(contactsList);
};

export const getOneContact = async (req, res) => {
  const { id } = req.params;
  const searchedContact = await contactsService.getContactById(id);
  if (!searchedContact) {
    throw HttpError(404);
  }
  res.json(searchedContact);
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
