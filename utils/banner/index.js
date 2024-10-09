import { Banner } from "../../models/banner_model.js";


// Banners Get:
export const get_banners = async () => {
  
  try {
    const bannersGet = await Banner.aggregate([
      {
        $match: {
          endDate: { $gt: new Date() }, 
        },
      },
    ]);
    return bannersGet;
  } catch (error) {
    console.log(error.message);
  }
};



