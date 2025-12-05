import { Router } from "express"
import { userController } from "./user.controller";


const router=Router()
router.get('/api/v1/users',userController.getAllUser)
router.put('/api/v1/users/:id',userController.updateUser)
router.delete('/api/v1/users/:id',userController.deleteUser)

export const userRouter= router;