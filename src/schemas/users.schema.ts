import {z} from "zod"

const userSchema = z.object ({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    phone: z.number(),
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

export {userSchema, userSchemaRequest, userSchemaResponse}