import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema( {
    name:{
        type:String
    }
} )

const Department = mongoose.model("Department", departmentSchema)
export {
    Department
}