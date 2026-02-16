import { Baserepository } from "./baserepo.js";
import contact from "../models/contact.js";

export class Userrepository extends Baserepository {

   find(data){
    return contact.find(data)
   }

   findOne(user){
    return contact.findOne(user)
   }

   create(contact){
    return contact.create(contact)
   }


}