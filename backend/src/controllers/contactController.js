import { httpMessage, httpStatus } from "../constants/http.js";

class ContactController {
  constructor(ContactService) {
    this.ContactService = ContactService;
  }

  createContact = async (req, res) => {
    try {
      const response = await this.ContactService.createContact({
        ...req.body,
      });
      
       res.json({
      success: true,
        response,
       })

    } catch (err) {
      console.log("error from controller : ", err);
      throw new Error(
        httpStatus.INTERNAL_SERVER_ERROR,
        httpMessage.INTERNAL_SERVER_ERROR,
      );
    }
  };
}

export default ContactController;
