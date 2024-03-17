import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      match: /[\w\s]+/,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: ["Action", "Biography", "History", "Horror", "Kids"],
      default: "Action",
    },
    year: {
      type: Number,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

export default mongoose.model("Book", bookSchema);
