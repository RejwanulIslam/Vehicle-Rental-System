import { Router } from "express"
import { vehicleContrliier } from "./vehicles.controller";


const router=Router()
router.post('/api/v1/vehicles',vehicleContrliier.addNewVehicle)
router.get('/api/v1/vehicles',vehicleContrliier.getAllVehicle)
router.get('/api/v1/vehicles/:id',vehicleContrliier.getSingleVehicle)
router.put('/api/v1/vehicles/:id',vehicleContrliier.updateVehicle)
router.delete('/api/v1/vehicles/:id',vehicleContrliier.deleteVehicle)


export const vehicleRouter= router;