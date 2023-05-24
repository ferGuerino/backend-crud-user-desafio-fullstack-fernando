import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRoutes } from "./routes/users.route"
import { handleErrorMiddleware } from "./middlewares/handleAppError.middleware"

const app = express()
app.use(express.json())
app.use("/users", usersRoutes)

app.use(handleErrorMiddleware)

export default app