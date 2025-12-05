import express from "express"
import { initDB } from "./config/DB";
import { authRouter } from "./modules/auth.ts/auth.route";
import { userRouter } from "./modules/users/user.route";

const app = express()
const port = 5000;
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running")
})



initDB()
// auth 
app.use('/auth',authRouter)

// user
app.use('/user',userRouter)




app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})