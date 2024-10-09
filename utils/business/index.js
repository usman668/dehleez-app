import { Business } from "../../models/business_model.js";
import mongoose from "mongoose";
// Get Businesses:-

export const get_businesses = async () => {
  try {
    const businessGet = await Business.aggregate([
      {
        $match: {},
      },
    ]);
    return businessGet;
  } catch (error) {
    console.log(error.message);
  }
};

// Update Business:-

export const update_business = async (payload) => {
  try {
    // Extract the file paths from the payload
    const logo =
      payload.files && payload.files["logo"]
        ? payload.files["logo"][0].path
        : undefined;
    const cover_image =
      payload.files && payload.files["cover_image"]
        ? payload.files["cover_image"][0].path
        : undefined;

    // Prepare the data for updating the business
    const oldData = {
      logo: logo,
      cover_image: cover_image,
      department: payload.department,
      verified: payload.verified,
      location: payload.location,
      user: payload.user,
    };

    // Update business by its ID
    const newData = await Business.findByIdAndUpdate(
      { _id: payload.id },
      oldData,
      { new: true }
    );
    return newData;
  } catch (error) {
    console.log(error.message);
  }
};

// Delete Business:-

export const delete_business = async (payload) => {
  try {
    const deletedBusiness = await Business.findByIdAndDelete({
      _id: payload.id,
    });
    return { message: "Business deleted successfully", deletedBusiness };
  } catch (error) {
    console.log(error.message);
  }
};

// Get Businesses on the basis of Department.

export const get_Business_By_Department = async (departmentId) => {
  try {
    const businesses = await Business.aggregate([
      {
        $match: { department: new mongoose.Types.ObjectId(departmentId) },
      },
      {
        $lookup: {
          from: "departments",
          localField: "department",
          foreignField: "_id",
          as: "departmentDetails",
        },
      },
      {
        $unwind: "$departmentDetails",
      },
    ]);

    console.log("Businesses found: ", businesses);

    if (businesses.length === 0) {
      return [];
    }

    return businesses;
  } catch (error) {
    console.error("Error in fetching businesses by department:", error.message);
  }
};
