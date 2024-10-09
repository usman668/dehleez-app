import { Business } from "../models/business_model.js";
import { User } from "../models/register_model.js";

// Create New Business:-

const create_business = async (req, resp) => {
  try {
    const logo =
      req.files && req.files["logo"] ? req.files["logo"][0].path : undefined;
    const cover_image =
      req.files && req.files["cover_image"]
        ? req.files["cover_image"][0].path
        : undefined;

    const { department, verified, location, user } = req.body;

    const businessData = new Business({
      logo: logo,
      cover_image: cover_image,
      department,
      verified,
      location,
      user,
    });

    const savedBusiness = await businessData.save();

    const updatedUser = await User.findByIdAndUpdate(
      user,
      { user_Roll: "business" },
      { new: true }
    );

    if (!updatedUser) {
      return resp.status(400).send({ message: "Failed to update user role" });
    }

    resp.status(200).send({
      message: "Business Created and User Role Updated to 'business'",
      businessData: savedBusiness,
    });
  } catch (error) {
    resp.status(400).send({ message: error.message });
  }
};

export { create_business };
