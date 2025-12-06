import { Router } from "express"
import { vehicleContrliier } from "./vehicles.controller";
import auth from "../../middleware/auth";


const router=Router()
router.post('/api/v1/vehicles',auth('admin'),vehicleContrliier.addNewVehicle)
router.get('/api/v1/vehicles',vehicleContrliier.getAllVehicle)
router.get('/api/v1/vehicles/:id',vehicleContrliier.getSingleVehicle)
router.put('/api/v1/vehicles/:id',auth('admin'),vehicleContrliier.updateVehicle)
router.delete('/api/v1/vehicles/:id',auth('admin'),vehicleContrliier.deleteVehicle)


export const vehicleRouter= router;