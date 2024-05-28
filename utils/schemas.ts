import {z} from "zod"


export const CreateProfileSchema = z.object({
    firstName: z.string().min(3,{message:"First name should at least be 3 characters"}),
    lastName: z.string().min(3,{message:"Last name should at least be 3 characters"}),
    username: z.string().min(3,{message:"Username should at least be 3 characters"}),
    bio: z.string(),
})