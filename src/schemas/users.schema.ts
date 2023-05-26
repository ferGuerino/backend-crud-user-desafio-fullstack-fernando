import {z} from "zod"

const userSchema = z.object ({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string(),
    createdAt: z.date(),
    
})

const userSchemaRequest = userSchema.omit({
    createdAt: true,
    id: true,
    
})

const userSchemaResponse = userSchema.omit({
    password: true,
})

const usersSchemaResponse = z.array(userSchemaResponse)

export {userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse}