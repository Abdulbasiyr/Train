
import { validateSignUp, validateLogin } from "../validation/auth.validation.js";
import { serviceLogin, serviceSignUp, serviceVerifyAuth } from "../services/auth.serivices.js";
import { resCookie } from "../utils/cookie.js";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt.auth.js";
import AppError from "../utils/error.js";


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
    
    const refreshToken = generateRefreshToken(result)
    const accessToken  = generateAccessToken(result)
    resCookie(res, refreshToken)
    return res.status(200).json({result, accessToken})
  } catch(err) {
    next(err)
  }

}


export async function controllerVerifyAuth(req, res, next) {

  const token = req.cookies.token

  try {
    const accessToken = serviceVerifyAuth(token)
    return res.status(200).json({accessToken})
  } catch(err) {
    next(err)
  }

} 