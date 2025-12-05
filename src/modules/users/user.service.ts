import { pool } from "../../config/DB"


const getAllUserDB=async()=>{
    const result=await pool.query(`SELECT * FROM users`)
    return result
}

const updateUserDB=async(data:Record<string, unknown>,id:any)=>{
    const {name, email, hasspass, phone, role}=data
    const result=await pool.query(`UPDATE users SET name=$1, email=$2, phone=$3, role=$4 WHERE id=$5 RETURNING*`,[name, email, phone, role,id])
    return result;
}
const deleteUserDB=async(id:any)=>{

    const result=await pool.query(`DELETE FROM users WHERE id=$1 RETURNING*`,[id])
    return result;
}

export const userService={
   getAllUserDB ,
   updateUserDB,
   deleteUserDB
}