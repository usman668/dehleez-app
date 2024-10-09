import { Banner } from "../models/banner_model.js";

// Create a new Banner:
const createBanner = async (req, resp) => {
  try {
    const banner_create = new Banner({
      image: req.file.path,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    const saveData = await banner_create.save();

    console.log("Banner Saved:", saveData);

    return resp.status(201).json({
      message: "Banner created successfully",
      data: saveData,
    });
  } catch (error) {
    return resp.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

export { createBanner };
