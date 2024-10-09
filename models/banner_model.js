import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

const Banner = mongoose.model("Banner", bannerSchema);
export { Banner };
