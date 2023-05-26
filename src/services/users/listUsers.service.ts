import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUsersResponse } from "../../interfaces/users.interface";
import { usersSchemaResponse } from "../../schemas/users.schema";


const listUsersService = async ():Promise<TUsersResponse> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const users: User[] = await userRepository.find()

    const returnUsers: TUsersResponse = usersSchemaResponse.parse(users)

    return returnUsers
}

export {listUsersService}