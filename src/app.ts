import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { usersRoutes } from "./routes/users.route"

const app = express()
app.use(express.json())
app.use("/users", usersRoutes)

app.get("/", (request, response) => response.json("Ok!!"))

export default app