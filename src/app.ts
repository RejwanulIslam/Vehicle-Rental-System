import express from "express"
import { initDB } from "./config/DB";
import { authRouter } from "./modules/auth.ts/auth.route";
import { userRouter } from "./modules/users/user.route";
import { vehicleRouter } from "./modules/vehicles.ts/vehicles.route";
import { bookingRouter } from "./modules/bookings.ts/booking.route";
import config from "./config";

const app = express()
const port = config.PORT;
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running")
})



initDB()
// auth 
app.use('/',authRouter)

// user
app.use('/',userRouter)

// vehicle
app.use('/',vehicleRouter)

// booking

app.use('/',bookingRouter)



export default app;
