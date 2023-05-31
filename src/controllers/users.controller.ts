import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { TUserRequest } from "../interfaces/users.interface";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (request:Request, response:Response):Promise<Response> =>{

    const userData: TUserRequest = request.body

    const newUser = await createUserService(userData)

    return response.status(201).json(newUser)
}

const listUsersController = async (request:Request, response:Response):Promise<Response>=>{
    const users = await listUsersService()

    return response.json(users)
}

const updateUserController = async (request:Request, response:Response):Promise<Response>=>{
    const userId = response.locals.userId

    const userData = request.body

    const updatedUser = await updateUserService(userData, userId)

    return response.json(updatedUser)
}

const deleteUserController = async (request:Request, response: Response):Promise<Response>=>{
    const userId = response.locals.userId

    await deleteUserService(userId)

    return response.status(204).json()
}


export {createUserController, listUsersController, updateUserController, deleteUserController}