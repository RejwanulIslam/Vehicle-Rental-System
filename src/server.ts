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
app.use('/auth',authRouter)

// user
app.use('/user',userRouter)

// vehicle
app.use('/vehicle',vehicleRouter)

// booking

app.use('/booking',bookingRouter)




app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})