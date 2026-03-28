
import { createUser, findUserByEmail } from "../repository/auth.repository"
import { AppError } from "../utils/auth.utils"
import bcrypt from 'bcrypt'


// Signup
export async function serviceSignUp(data) {

  const { email, name, password } = data

  const hashedPassword = await bcrypt.hash(password, 10)
  const result = {email, name, password: hashedPassword}

  try {
    const  createdUser = await createUser(result)
    return createdUser
  } catch(error) {
    if(error.code === 'P2002') {
      throw new AppError('User already exists', 409)
    }
    throw error
  }

}


// Login
export async function serviceLogin(data) {

  const { email, password } = data

}