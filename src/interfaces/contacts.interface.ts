import {z} from "zod"
import { DeepPartial } from "typeorm"
import { contactSchema, contactSchemaListResponse, contactSchemaRequest} from "../schemas/contacts.schema"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContactResponse = z.infer<typeof contactSchema>
type TContactsResponse = z.infer<typeof contactSchemaListResponse>
type TContactUpdateRequest = DeepPartial<TContactRequest>

export {TContact, TContactRequest, TContactsResponse, TContactResponse, TContactUpdateRequest}