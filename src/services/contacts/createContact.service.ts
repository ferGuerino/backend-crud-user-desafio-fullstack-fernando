import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";



const createContactService = async (data:TContactRequest, userId:string):Promise<Contact> =>{

    const contactsRepository = AppDataSource.getRepository(Contact)
    const usersRepository = AppDataSource.getRepository(User)

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    const contact: Contact = contactsRepository.create({
        ...data,
        user: user!,
    })

    await contactsRepository.save(contact)

    return contact
    
}

export {createContactService}