import { Router } from "express";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router()

contactsRoutes.use(ensureAuthMiddleware)

contactsRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactsRoutes.get("", listContactController)
contactsRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, ensureIsOwnerMiddleware, deleteContactController)

export {contactsRoutes}