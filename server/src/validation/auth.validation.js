
import { z } from 'zod'
import  AppError  from '../utils/error.js'


const signUpSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().trim().toLowerCase().email('Invalid email address'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters').max(100, 'Password must be less than 100 characters')
})

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Invalid email address'),
  password: z.string().trim().min(1, 'Password required')
})


export function validateSignUp(data) {
  const parsed = signUpSchema.safeParse(data)

  if(!parsed.success) throw new AppError(parsed.error.issues[0].message, 400)

  return parsed.data
}


export function validateLogin(data) {
  return console.log(data)
  const parsed = loginSchema.safeParse(...data)

  if(!parsed.success) throw new AppError(parsed.error.issues[0].message, 400)
    
  return parsed.data
}