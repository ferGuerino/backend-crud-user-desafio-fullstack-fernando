import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entitie"
import { AppError } from "../../errors/AppError"
import { TUserResponse } from "../../interfaces/users.interface"
import { userSchemaResponse } from "../../schemas/users.schema"


const retrieveUserService = async (userId: string): Promise<TUserResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            id: userId,
        }
    })

    if (!user) {
        throw new AppError('User not found', 404)
    }

    const returnUser: TUserResponse = userSchemaResponse.parse(user)

    return returnUser
}

export {retrieveUserService}
