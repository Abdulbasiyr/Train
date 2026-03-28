
import bcrypt from 'bcrypt'
import { createUser } from '../repository/auth.repository'
import AppError from '../utils/error.js'

const SALT_ROUNDS = 10

// signUp service
export async function serviceSignUp(data) {

  const { name, email, password } = data

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  const result = {name, email, password: hashedPassword}

  try {
    return await createUser(result)
  } catch(error) {
    if(error.code === 'P2002') {
      throw new AppError('User already exists', 409)
    }
    throw error
  }

}


// login service
export async function serviceLogin(data) {

  const { email, password } = data

  const user = await findUserByEmail(email)
  if(!user) throw new AppError('Email or password invalid', 401)

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if(!isPasswordValid) throw new AppError('Email or password invalid', 401)

  return { id: user.id, name: user.name, email: user.email }

}