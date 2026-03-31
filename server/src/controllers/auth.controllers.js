
import { validateSignUp, validateLogin } from "../validation/auth.validation.js";
import { serviceLogin, serviceSignUp, serviceVerifyAuth } from "../services/auth.serivices.js";


// signup
export async function controllerSignUp(req, res, next) {

  try {

    const validatedData = validateSignUp(req.body)
    const result = await serviceSignUp(validatedData)

    return res.status(201).json(result)
  } catch(err) {
    next(err)
  }

}


// login
export async function controllerLogin(req, res, next) {

  try {
    const validatedData = validateLogin(req.body)
    const result        = await serviceLogin(validatedData)
    return res.status(200).json(result)
  } catch(err) {
    next(err)
  }

}


// controller verify auth
export function controllerVerifyAuth(req, res, next) {

  const token = req.cookies.refreshToken

  try {
    const accessToken = serviceVerifyAuth(token)
    return res.status(200).json({accessToken})
  } catch(err) {
    next(err)
  }

}