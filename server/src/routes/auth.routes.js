
import { Router } from "express";
import { controllerVerifyAuth, controllerLogin, controllerSignUp } from "../controllers/auth.controllers.js";


const router = Router()

router.post('/signup', signUpController)
router.post('/login',  loginController)
router.get('verify',   controllerVerifyAuth)


export default router