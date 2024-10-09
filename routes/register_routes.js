import express from "express";
import { upload } from "../utils/multer.js";
import {SignUp, LogIn} from "../controllers/register_controller.js";
const userRoute = express.Router();

userRoute.post("/signup",upload.single("profile_Picture") ,SignUp )
userRoute.post("/login",LogIn )
export {
    userRoute
}