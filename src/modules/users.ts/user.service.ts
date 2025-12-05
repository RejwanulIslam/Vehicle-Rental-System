import { pool } from "../../config/DB";

const creactUSerBD = async (paylod: Record<string, any>) => {
    const { name, email, password, phone, role } = paylod;

    const result = await pool.query(`INSERT INTO users(name, email, password, phone, role) VALUES($1,$2,$3,$4,$5) RETURNING*`,
        [name, email, password, phone, role])
    return result;
}

export const userService = {
    creactUSerBD
}