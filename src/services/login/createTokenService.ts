import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken"
import "dotenv/config"


const createTokenService = async (loginData: TLoginRequest):Promise<string> =>{
    const usersRepository = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
        where: {
            email: loginData.email
        }
    })

    if(!user){
        throw new AppError("invalid credentials", 403)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch){
        throw new AppError("invalid credentials", 403)
    }

    const token = jwt.sign(
        {userName: user.name},
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(user.id)
        }
    )

    return token
} 

export {createTokenService}