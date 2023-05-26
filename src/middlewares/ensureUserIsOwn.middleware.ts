import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entities";
import { User } from "../entities/user.entitie";


const ensureUserIsOwnMiddleware = async (request:Request, response:Response, next:NextFunction)=>{
    
    const usersRepository = AppDataSource.getRepository(User)

    const userId: string = response.locals.userId    

    const user: User | null = await usersRepository.findOneBy({
        id: userId
    })
    
    if(!user){
        return response.status(404).json({
            message: "User not found"
        })
    }

    if(user.id !== userId){
        return response.status(403).json({
            message: "You do not have permission"
        })
    }

    return next()
}

export {ensureUserIsOwnMiddleware}