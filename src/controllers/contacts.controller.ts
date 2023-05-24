import { Request, Response } from "express";


const createContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

const listContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

const updateContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

const deleteContactController = async (request:Request, response:Response):Promise<Response> => {

    

    return response.status(201).json()
}

export {createContactController, listContactController, updateContactController, deleteContactController}