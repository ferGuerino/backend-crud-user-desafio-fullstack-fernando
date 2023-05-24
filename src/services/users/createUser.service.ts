import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";
import { AppError } from "../../errors/AppError";


const createUserService = async (userData: TUserRequest):Promise<TUserResponse> =>{
    
    const {name, email, phone, password} = userData
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if(findUser){
        throw new AppError("User already exists", 409)
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