import { Router } from "express";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";

const contactsRoutes = Router()

contactsRoutes.post("", createContactController)
contactsRoutes.get("", listContactController)
contactsRoutes.patch("", updateContactController)
contactsRoutes.delete("", deleteContactController)

export {contactsRoutes}