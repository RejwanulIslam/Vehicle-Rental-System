import { Request, Response } from "express"
import { vehicleService } from "./vehicles.service"

const addNewVehicle = async (req: Request, res: Response) => {
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
const getAllVehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.getalVhicelDB()
        res.status(200).json({
            "success": true,
            "message": "Vehicles retrieved successfully",
            "data": result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const getSingleVehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.getSingleVhicelDB(req.params.id)
        if (result.rows.length == 0) {
            res.status(404).json({
                success: false,
                message: 'Vehicle not found'
            })
        }
        else {
            res.status(200).json({
                "success": true,
                "message": "Vehicle retrieved successfully",
                "data": result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const updateVehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicleService.updateVhicelDB(req)
        if (result.rows.length == 0) {
            res.status(404).json({
                success: false,
                message: 'Vehicle not found'
            })
        } else {
            res.status(200).json({
                "success": true,
                "message": "Vehicle updated successfully",
                "data": result.rows[0]
            })
        }

    } catch (error: any) {
        res.status(500).json({
            "success": false,
            "message": error.message
        })

    }

}
const deleteVehicle = async (req: Request, res: Response) => {

    try {
        const result = await vehicleService.deleteVhicelDB(req.params.id)
        if (result.rows.length == 0) {
            res.status(404).json({
                success: false,
                message: 'Vehicle not found'
            })
        } else {
            res.status(200).json({
                "success": true,
                "message": "Vehicle deleted successfully"

            })
        }

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
