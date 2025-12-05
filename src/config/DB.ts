import { Pool } from "pg"

export const pool = new Pool({ 
    connectionString: 'postgresql://neondb_owner:npg_pMYN4i8nLjDq@ep-purple-dust-a8e43smu-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'
})

export const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL CHECK (email=LOWER(email)),
        password TEXT NOT NULL,
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(60)
        )
        `)
}