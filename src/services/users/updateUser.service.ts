import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { TUserResponse, TUsersUpdateRequest } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";


const updateUserService = async (userData: TUsersUpdateRequest, userId: string):Promise<TUserResponse>=>{
    const userRepository = AppDataSource.getRepository(User)

    const oldData = await userRepository.findOneBy({id: userId})

    if(userData.password){
        const hashedPassword = await hash(userData.password, 10)

        const newUserData = userRepository.create({
            ...oldData,
            ...userData,
            password: hashedPassword,
        })
        await userRepository.save(newUserData)

        return userSchemaResponse.parse(newUserData)
    }

    const newUserData = userRepository.create({
        ...oldData,
        ...userData,
       
    })
    await userRepository.save(newUserData)

    return userSchemaResponse.parse(newUserData)
}

export {updateUserService}