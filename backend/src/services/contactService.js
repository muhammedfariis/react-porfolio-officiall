import { httpMessage, httpStatus } from "../constants/http";
class ContactService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  async createContact({ Name, Email, Phone, JobEnquiry, Textarea }) {
    if (!Name || !Email || Phone === null || !JobEnquiry || !Textarea) {
      throw new Error(httpStatus.CONFLICT, httpMessage.VALIDATION_ERROR);
    }

    const exist = await this.UserRepository.findOne(Email);

    if (exist) {
      throw new Error(httpStatus.BADREQUEST, httpMessage.USEREXIST);
    }

    const contact = await this.UserRepository.create({
      Name,
      Email,
      Phone,
      JobEnquiry,
      Textarea,
    });

    if (!contact) {
      throw new Error(httpStatus.BADREQUEST, httpMessage.NOT_CREATED);
    }

    return {
      messege: httpMessage.CREATED,
      status: httpStatus.CREATED,
      contacts: contact,
    };
  }
}

export default ContactService;
