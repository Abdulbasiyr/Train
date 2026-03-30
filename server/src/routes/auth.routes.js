
import { Router } from "express";
import { loginController, signUpController } from "../controllers/auth.controllers.js";


const router = Router()

router.post('/signup', signUpController)
router.post('/login',  loginController)


export default router