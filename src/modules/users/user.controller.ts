import { Request, Response } from "express"
import { userService } from "./user.service"

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUserDB()
        res.status(201).json({
            "success": true,
            "message": "User get successfully",
            "data": result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}


const updateUser=async  (req: Request, res: Response) => {
    try {
        const result = await userService.updateUserDB(req.body,req.params.id)
        res.status(201).json({
            "success": true,
            "message": "update successfully",
            "data": result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const deleteUser=async  (req: Request, res: Response) => {
    try {
        const result = await userService.deleteUserDB(req.params.id)
        res.status(201).json({
            "success": true,
            "message": "user delete successfully",
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}



export const userController = {
   getAllUser ,
   updateUser,
   deleteUser,
}
