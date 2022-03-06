import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },

    birthDate: {
      type: String,
    },

    profileImg: {
      type: String,
      default: "",
    },

    coverImg: {
      type: String,
      default: "",
    },

    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    homeTown: {
      type: String,
      max: 50,
    },
    postId: [],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
