import {z} from "zod"

const contactSchema = z.object ({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),    
    createdAt: z.date()
    
})

const contactSchemaRequest = contactSchema.omit({
    createdAt: true,
    id: true,
    
})

const contactSchemaUpdate = contactSchema.omit({
    createdAt: true,
    id: true,
}).partial()

const contactSchemaListResponse = z.array(contactSchema)

export {contactSchema, contactSchemaRequest, contactSchemaUpdate, contactSchemaListResponse}