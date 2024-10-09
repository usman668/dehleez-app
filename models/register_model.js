import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: true,
  },
  last_Name: {
    type: String,
    required: true,
  },
  phone_No: {
    type: String,
    required: true,
  },
  profile_Picture: {
    type: String,
    required: true,
  },
  user_Roll: {
    type: String,
    enum: ["business", "customer"],
    default: "customer",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);
export { User };
