import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contacts.interface";
import { contactSchemaListResponse } from "../../schemas/contacts.schema";


const listContactsService = async (userId: string):Promise<any> =>{
    const contactsRepository = AppDataSource.getRepository(Contact)
    const usersRepository = AppDataSource.getRepository(User)

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError("User not found", 404)
    }
    
    const contacts: Contact[] = await contactsRepository.find({
        where: {
            user: user
        }
    })
    console.log(contacts)

    return contactSchemaListResponse.parse(contacts)
    
    
}

export {listContactsService}