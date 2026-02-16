import contactComposer from "../composers/contactComposer.js";
import express from "express"

const composer = contactComposer()
const Router = express.Router()

Router.post("/allContacts" , composer.createContact)

export default Router