import { Userrepository } from "../repositories/userrepo.js";
import ContactController from "../controllers/contactController.js";
import ContactService from "../services/contactService.js";

const contactComposer = () => {
  const repository = new Userrepository();
  const services = new ContactService(repository);
  const controller = new ContactController(services);

  return controller;
};

export default contactComposer;
