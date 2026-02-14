import { Baserepository } from "./baserepo";
import contact from "../models/contact";

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