
import bcrypt from 'bcrypt'
import { createUser, findUserByEmail } from '../repository/auth.repository.js'
import AppError from '../utils/error.js'
import { generateAccessToken, verifyRefreshToken } from '../utils/jwt.auth.js'


const SALT_ROUNDS = 10

export async function serviceSignUp(data) {

  const { name, email, password } = data

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  
  try {
    return await createUser({ name, email, password: hashedPassword })
  } catch(err) {
    if(err?.code === 'P2002') {
      throw new AppError('User already exists', 409)
    }
    throw err
  }

}


// login
export async function serviceLogin(data) {

  const {email, password} = data


  const userData = await findUserByEmail(email)
  if(!userData) throw new AppError('Email or password invalid', 401)

  const isPasswordValid = await bcrypt.compare(password, userData.password)
  if(!isPasswordValid) throw new AppError('Email or password invalid', 401)

  return { id: userData.id, email: userData.email, name: userData.name }

}



// service verify auth
export function serviceVerifyAuth(token) {

  if(!token) throw new AppError('Unauthorized', 401)

  try {
    const verifiedToken = verifyRefreshToken(token)
    return generateAccessToken({id: verifiedToken.id, email: verifiedToken.email})
  } catch {
    throw new AppError('Unauthorized', 401)
  }


}