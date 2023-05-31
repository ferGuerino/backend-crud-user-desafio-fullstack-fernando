import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"
import { usersRoutes } from "./routes/users.route"
import { handleErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.route"
import { contactsRoutes } from "./routes/contacts.route"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)

app.use(handleErrorMiddleware)

export default app