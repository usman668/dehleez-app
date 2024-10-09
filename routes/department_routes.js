import express from "express";
import { department } from "../controllers/department_controller.js";

const departmentRoute = express.Router();

departmentRoute.post("/department-add", department)

export {
    departmentRoute
}