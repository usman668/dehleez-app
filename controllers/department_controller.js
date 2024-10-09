import { Department } from "../models/department_model.js";

// Department Create.

const department = async (req, resp) => {
    try {
       const data = new Department(req.body) 
       const save_data = await data.save();
       resp.status(200).send({message:`Data Saved Successfully`, data:save_data})
    } catch (error) {
       resp.status(400).send(error.message) 
    }
}

export {
    department
}