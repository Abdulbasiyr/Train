import { createUser, findUserByEmail } from "../repository/auth.repository"



// Signup
export async function serviceSignUp(data) {

  const { email } = data

  const user = await findUserByEmail(email)
  if(user) throw new Error('User already exists')

  try {
    const createdUser = await createUser(data)
    return createdUser
  } catch(err) {
    if(err.code === 'P2002') {
      throw new Error('User already exists')
    }
    throw err
  }

}


// Login
export async function serviceLogin(data) {

  const { email, password } = data

}