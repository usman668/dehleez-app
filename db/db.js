import mongoose from "mongoose";
const db_Name = "DehleezApp"
const dbConnection = async () => {
    try {
        const connection_Instance = await mongoose.connect(`${process.env.DB_URI}${db_Name}`)
        console.log(`DATABASE CONNECTED: ${connection_Instance.connection.host}` )
    } catch (error) {
        console.log("ERROR OCCURS ", error.message)
    }
}

export {
    dbConnection
}