import mongoose from "mongoose";

// Location Schema :-
const locationSchema = new mongoose.Schema({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

// Business Schema :-
const businessSchema = new mongoose.Schema({
  logo: {
    type: String,
  },
  cover_image: {
    type: String,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  verified: {
    type: Boolean,
  },
  location: {
    type: locationSchema,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Business = mongoose.model("Business", businessSchema);
export { Business };
