import { pool } from "../../config/DB";

const creactVhicelDB = async (paylod: Record<string, any>) => {
    const { vehicle_name, type, registration_number, daily_rent_price, availability_status } = paylod;
    const result = await pool.query(`INSERT INTO vehicles( vehicle_name, type, registration_number, daily_rent_price, availability_status ) VALUES($1,$2,$3,$4,$5) RETURNING*`,
        [vehicle_name, type, registration_number, daily_rent_price, availability_status])
    return result;
}
const getalVhicelDB = async () => {
    const result = await pool.query(`SELECT * FROM vehicles*`)
    return result;
}
const getSingleVhicelDB = async (id: any) => {
    const result = await pool.query(`SELECT * FROM vehicles WHERE id=$1`, [id])
    return result;
}
const updateVhicelDB = async (paylod: Record<string, any>) => {
    const { vehicle_name, type, registration_number, daily_rent_price, availability_status } = paylod.body
    const result = await pool.query(`UPDATE vehicles SET vehicle_name=$1, type=$2, registration_number=$3, daily_rent_price=$4, availability_status=$5 WHERE id=$6 RETURNING*`, [vehicle_name, type, registration_number, daily_rent_price, availability_status, paylod.params.id])
    return result;
}
const deleteVhicelDB = async (id:string|undefined) => {
    const result = await pool.query(`DELETE FROM vehicles WHERE id=$1 RETURNING*`, [id])
    return result;
}



export const vehicleService = {
    creactVhicelDB,
    getalVhicelDB,
    getSingleVhicelDB,
    updateVhicelDB,
    deleteVhicelDB,

}