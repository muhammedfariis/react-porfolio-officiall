import { Userrepository } from "../repositories/userrepo.js";
import ContactController from "../controllers/contactController.js";
import ContactService from "../services/contactService.js";
import Mailservice from "../services/mail.js";
const contactComposer = () => {
  const repository = new Userrepository();
  const mail = new Mailservice()
  const service = new ContactService(repository,mail);
  const controller = new ContactController(service);

  return controller;
};

export default contactComposer;
