import { Router } from "express"
import { userContrliier } from "./auth.contrliier"


const router=Router()
router.post('/api/v1/auth/signup',userContrliier.creactUser)
router.post('/api/v1/auth/signIn',userContrliier.loginUser)


export const userRouter= router;