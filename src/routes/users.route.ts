import {Router} from "express"
import { createUserController, listUsersController, updateUserController } from "../controllers/users.controller"
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware"
import { userSchemaRequest, userSchemaUpdateRequest } from "../schemas/users.schema"
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware"
import { ensureUserIsOwnMiddleware } from "../middlewares/ensureUserIsOwn.middleware"

const usersRoutes = Router()

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get("", listUsersController)
usersRoutes.patch("", ensureAuthMiddleware, ensureDataIsValidMiddleware(userSchemaUpdateRequest), updateUserController)
usersRoutes.delete("", ensureAuthMiddleware, ensureUserIsOwnMiddleware)

export {usersRoutes}