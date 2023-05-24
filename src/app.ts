import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRoutes } from "./routes/users.route"
import { handleErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.route"
import { contactsRoutes } from "./routes/contacts.route"

const app = express()
app.use(express.json())
app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)

app.use(handleErrorMiddleware)

export default app