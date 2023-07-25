import { z } from 'zod'

// Validamos el registro
export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid Email'
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: 'Password must be at least 6 characters'
    })
})

// Validamos el login
export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Email format incorrect"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, {
        message: "length password incorrect"
    })
})