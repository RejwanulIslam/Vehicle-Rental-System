import { pool } from "../../config/DB";




const addBookinglDB = async (paylod: Record<string, any>) => {
    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = paylod;

    const startDate: Date = new Date(rent_start_date)
    const endDate: Date = new Date(rent_end_date)
    if (new Date(rent_end_date) <= new Date(rent_start_date)) {
        throw new Error("rent_end_date must be after rent_start_date");
    }
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

    const vehicle = await pool.query(`SELECT * FROM vehicles WHERE id=$1`, [vehicle_id])
    const total_price = vehicle.rows[0].daily_rent_price * totalDays


    // update vehicle status
    await pool.query(`UPDATE vehicles SET availability_status=$1 WHERE id=$2 RETURNING*`, ['booked', vehicle_id])



    const result = await pool.query(`INSERT INTO bookings(customer_id, vehicle_id, rent_start_date, rent_end_date,total_price) VALUES($1,$2,$3,$4,$5) RETURNING*`,
        [customer_id, vehicle_id, rent_start_date, rent_end_date, total_price])
    return result;
}


const getBoohingDB = async (paylod: Record<string, unknown>,user:Record<string, any>) => {
    console.log('bokinbhhhhhh', user)
    let booking

    if (user.role == 'admin') {
        booking = await pool.query(`SELECT * FROM bookings*`)
    }

    if (user.role !== 'admin') {
        booking = await pool.query(`SELECT * FROM bookings WHERE customer_id=$1`, [user.id])

    }

    return booking;
}

const updateBookingDB = async (paylod: Record<string, any>) => {


    let result
    const singlebooking = await pool.query(`SELECT * FROM bookings WHERE id=$1`, [paylod.params.id])
    const today = new Date();

    if (paylod.body.status == 'cancelled' && today <= new Date(singlebooking.rows[0].rent_start_date)) {
        result = await pool.query(`UPDATE bookings SET status=$1 WHERE id=$2 RETURNING*`, [paylod.body.status, paylod.params.id])

    };

    if (paylod.body.status == 'returned' && paylod.user.role == 'admin') {
        result = await pool.query(`UPDATE bookings SET status=$1 WHERE id=$2 RETURNING*`, [paylod.body.status, paylod.params.id])
        await pool.query(`UPDATE vehicles SET availability_status=$1 WHERE id=$2 RETURNING*`, ['available', result.rows[0].vehicle_id])


    }
    return result;
}


export const bookingService = {
    addBookinglDB,
    getBoohingDB,
    updateBookingDB,

}