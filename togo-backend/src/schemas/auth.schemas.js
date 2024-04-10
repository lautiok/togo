import {z} from "zod";

 export const registerSchema = z.object({
    name: z.string(
        {
            required_error: "Name is required",
        }
    ),
    email: z.string({ 
        required_error: "Email is required",
    }).email({
        message: "Must be a valid email"
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must be at least 6 characters long",
    })
})

export const loginSchema = z.object({
    email: z.string({ 
        required_error: "Email is required",
    }).email({
        message: "Must be a valid email"
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must be at least 6 characters long",
    })
})