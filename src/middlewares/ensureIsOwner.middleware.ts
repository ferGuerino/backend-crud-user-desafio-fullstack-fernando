import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";


const ensureIsOwnerMiddleware = async (request:Request, response:Response, next:NextFunction)=>{
    const contactRepository = AppDataSource.getRepository(Contact)

    const contactId: string = request.params.id
    const userId: string = response.locals.userId

    const contact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if(!contact){
        return response.status(404).json({
            message: "Contact not found"
        })
    }

    if(contact.user.id !== userId){
        return response.status(403).json({
            message: "You do not have permission"
        })
    }

    return next()
}

export {ensureIsOwnerMiddleware}