import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactRequest, TContactResponse } from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";



const createContactService = async (data:TContactRequest, userId:string):Promise<TContactResponse> =>{

    const contactsRepository = AppDataSource.getRepository(Contact)
    const usersRepository = AppDataSource.getRepository(User)

    let contact: Contact | null = await contactsRepository.findOneBy({
        email: data.email
    })

    if(contact){
        throw new AppError("Contact already exists", 400)
    }

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    contact = contactsRepository.create({
        ...data,
        user: user!,
    })

    await contactsRepository.save(contact)

    return contactSchema.parse(contact)
    
}

export {createContactService}