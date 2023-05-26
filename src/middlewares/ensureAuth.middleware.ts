import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

const ensureAuthMiddleware = (request:Request, response:Response, next:NextFunction) =>{
    let token = request.headers.authorization

    if(!token){
        return response.status(403).json({
            message: "token is missing"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error:any, decoded:any)=>{
        if(error){
            return response.status(401).json({
                message: "Invalid token"
            })
        }

        response.locals.userId = decoded.sub

        return next()
    })
}

export {ensureAuthMiddleware}