import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TUserRequest } from "../interfaces/users.interface";
import { listUsersService } from "../services/users/listUsers.service";

const createUserController = async (request:Request, response:Response):Promise<Response> =>{

    const userData: TUserRequest = request.body

    const newUser = await createUserService(userData)

    return response.status(201).json(newUser)
}

const listUsersController = async (request:Request, response:Response):Promise<Response>=>{
    const users = await listUsersService()

    return response.json(users)
}


export {createUserController, listUsersController}