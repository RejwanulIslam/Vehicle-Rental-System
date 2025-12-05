import { Router } from "express"
import { authContrliier } from "./auth.contrliier";


const router=Router()
router.post('/api/v1/auth/signup',authContrliier.creactUser)
router.post('/api/v1/auth/signIn',authContrliier.loginUser)


export const authRouter= router;