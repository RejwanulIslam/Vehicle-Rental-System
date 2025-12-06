import { pool } from "../../config/DB";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from "../../config";

const creactUSerBD = async (paylod: Record<string, any>) => {
    const { name, email, password, phone, role } = paylod;


    const hasspass = await bcrypt.hash(password as string, 10)

    const result = await pool.query(`INSERT INTO users(name, email, password, phone, role) VALUES($1,$2,$3,$4,$5) RETURNING*`,
        [name, email, hasspass, phone, role])
    return result;
}

const loginUserBD = async (paylod: Record<string, any>) => {
    const { email, password, } = paylod;


    const result = await pool.query(`SELECT * FROM users WHERE email =$1`, [email])
    if (result.rows.length === 0) {
        return null
    }
    const user = result.rows[0]
    
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return false
    }

    const secret = config.JWT_SECRET as string
    const token = jwt.sign({ name: user.name, email: user.email, role: user.role, id: user.id }, secret, {
        expiresIn: '30d'
    })


    return { token, user };
}

export const authService = {
    creactUSerBD,
    loginUserBD,
}