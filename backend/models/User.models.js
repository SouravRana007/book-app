import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {},
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", UserSchema);
