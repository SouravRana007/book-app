import mongoose, { Schema, model } from "mongoose";
const BookSchema = new Schema(
  {
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
  },
  { timestamps: true }
);

export const Book = new mongoose.model("Book", BookSchema);
