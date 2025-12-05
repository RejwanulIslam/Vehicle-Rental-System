import { Router } from "express"
import { userContrliier } from "./user.contrliier"


const router=Router()
router.post('/',userContrliier.creactUser)


export default router;