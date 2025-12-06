
import dotenv from "dotenv"
import path from "path"

dotenv.config({path:path.join(process.cwd(),".env")})
const config={
PORT:process.env.PORT,
CONNECTIONSTRING:process.env.CONNECTIONSTRING,
JWT_SECRET:process.env.JWT_SECRET,

}

export default config;