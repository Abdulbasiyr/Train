
import { validateSignUp, validateLogin } from "../validation/auth.validation.js";
import { serviceLogin, serviceSignUp } from "../services/auth.serivices.js";


// signup
export async function signUpController(req, res, next) {

  try {

    const validatedData = validateSignUp(req.body)
    const result = await serviceSignUp(validatedData)

    return res.status(201).json(result)
  } catch(err) {
    console.error(err)
    next(err)
  }

}


// login
export async function loginController(req, res, next) {

  try {
    const validatedData = validateLogin(req.body)
    const result = await serviceLogin(validatedData)

    return res.status(200).json(result)
  } catch(err) {
    console.error(err)
    next(err)
  }

}