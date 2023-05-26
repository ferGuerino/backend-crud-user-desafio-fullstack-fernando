import {Router} from "express"
import { createUserController, listUsersController } from "../controllers/users.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest } from "../schemas/users.schema"

const usersRoutes = Router()

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get("", listUsersController)

export {usersRoutes}