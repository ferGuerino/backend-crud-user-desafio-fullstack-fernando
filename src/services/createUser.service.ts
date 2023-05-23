import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../interfaces/users.interface";
import { userSchemaResponse } from "../schemas/users.schema";


const createUserService = async (userData: TUserRequest):Promise<TUserResponse> =>{
    
    const {name, email, phone, password} = userData
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if(findUser){
        throw new Error("User already exists")
    }
    
    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        ...userData,
        password: hashedPassword,
    })

    await userRepository.save(user)

    return userSchemaResponse.parse(user)

}

export {createUserService}