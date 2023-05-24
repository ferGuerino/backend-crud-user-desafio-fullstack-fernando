import { Request, Response } from "express";
import { createTokenService } from "../services/login/createTokenService";
import { TLoginRequest } from "../interfaces/login.interface";

const createTokenController = async (request:Request, response:Response):Promise<Response> =>{

    const loginData: TLoginRequest = request.body

    const token = await createTokenService(loginData)

    return response.json({ token })
}

export {createTokenController}
