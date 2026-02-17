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
      
       res.status(200).json({
      success: true,
        response,
       })

    } catch (err) {
      console.log("error from controller : ", err);
         return res.status(500).json({
    success: false,
    message: "Internal Server Error from controller",
    error: err.message,
  });
    }
  };
}

export default ContactController;
