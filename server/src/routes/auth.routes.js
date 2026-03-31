
import { Router } from "express";
import { controllerVerifyAuth, controllerLogin, controllerSignUp } from "../controllers/auth.controllers.js";


const router = Router()

router.post('/signup', controllerSignUp)
router.post('/login',  controllerLogin)
router.get('verify',   controllerVerifyAuth)


export default router