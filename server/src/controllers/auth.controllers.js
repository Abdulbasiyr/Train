import { validateSignUp, validateLogin } from "../validation/auth.validation.js";


// signup
export async function signUpController(req, res) {

  try {

    const validatedData = validateSignUp(req.body)
    const result = await serviceSignUp(validatedData)

    return res.status(201).json(result)
  } catch(err) {
    console.error(err)
    return res.status(err.statusCode || 500).json({message: err.message || 'Internal server error'})
  }

}


// login
export async function loginController(req, res) {

  try {

    const validatedData = validateLogin(req.body)
    const result = await serviceLogin(validatedData)

    return res.status(200).json(result)
  } catch(err) {
    console.error(err)
    return res.status(err.statusCode || 500).json({message: err.message || 'Internal server error'})
  }

}