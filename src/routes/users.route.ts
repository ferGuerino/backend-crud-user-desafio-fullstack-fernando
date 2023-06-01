import {Router} from "express"
import { createUserController, deleteUserController, listUsersController, retrieveUsercontroller, updateUserController } from "../controllers/users.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/users.schema"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"

const usersRoutes = Router()

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get("", listUsersController)
usersRoutes.get("/self", ensureAuthMiddleware, retrieveUsercontroller)
usersRoutes.patch("", ensureAuthMiddleware, ensureDataIsValidMiddleware(userSchemaUpdateRequest), updateUserController)
usersRoutes.delete("", ensureAuthMiddleware, deleteUserController)

export {usersRoutes}