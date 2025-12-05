import { Request, Response } from "express"
import { userService } from "./auth.service"

const creactUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.creactUSerBD(req.body)
        res.status(201).json({
            "success": true,
            "message": "User registered successfully",
            "data": result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}


const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.loginUserBD(req.body)
        res.status(201).json({
            "success": true,
            "message": "Login successful",
            "data": result
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }
}

export const userContrliier = {
    creactUser,
    loginUser,
}
