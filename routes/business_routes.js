import express from "express";
import { upload } from "../utils/multer.js";
import { create_business } from "../controllers/business_controller.js";
const businessRoutes = express.Router();

 businessRoutes.post("/add-business",  upload.fields([
     { name: "logo", maxCount: 1 },
     { name: "cover_image", maxCount: 1 },
   ]),create_business )

export {
    businessRoutes
}