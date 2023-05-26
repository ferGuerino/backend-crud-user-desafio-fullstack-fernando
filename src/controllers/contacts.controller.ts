import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";


const createContactController = async (request:Request, response:Response):Promise<Response> => {
    const userId = response.locals.userId

    const contactData = request.body

    const newContact = await createContactService(contactData, userId)
    

    return response.status(201).json(newContact)

    
}

const listContactController = async (request:Request, response:Response):Promise<Response> => {
    const userId = response.locals.userId

    const contacts = await listContactsService(userId)
    

    return response.json(contacts)
}

const updateContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

const deleteContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

export {createContactController, listContactController, updateContactController, deleteContactController}