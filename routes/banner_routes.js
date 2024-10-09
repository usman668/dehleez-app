import express from "express";
import { upload } from "../utils/multer.js";
import { createBanner } from "../controllers/banner_controller.js";

const bannerRoutes = express.Router();
bannerRoutes.post("/create-banner", upload.single("image"), createBanner);

export { bannerRoutes };










