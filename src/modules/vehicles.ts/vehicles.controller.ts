import { Request, Response } from "express"
import { vehicleService } from "./vehicles.service"

const addNewVehicle  = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.creactVhicelDB(req.body)
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
const getAllVehicle  = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.getalVhicelDB()
        res.status(201).json({
            "success": true,
            "message": "get all veicel",
            "data": result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const getSingleVehicle  = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.getSingleVhicelDB(req.params.id)
        res.status(201).json({
            "success": true,
            "message": "update veicel",
            "data": result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const updateVehicle  = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.updateVhicelDB(req)
        res.status(201).json({
            "success": true,
            "message": "get single veicel",
            "data": result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const deleteVehicle  = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.deleteVhicelDB(req.params.id)
        res.status(201).json({
            "success": true,
            "message": "delete veicel",
            
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}


export const vehicleContrliier = {
    addNewVehicle,
    getAllVehicle,
    getSingleVehicle,
    updateVehicle,
    deleteVehicle,
}
