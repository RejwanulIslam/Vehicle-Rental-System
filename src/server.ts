import express from "express"
import { initDB } from "./config/DB";
import router from "./modules/users.ts/user.route";
const app = express()
const port = 5000;
app.use(express.json())

app.get('/', (req, res) => {
    res.send("server is running")
})



initDB()

app.use('/user',router)



app.listen(port, () => {
    console.log(`app listen on port ${port}`)
})