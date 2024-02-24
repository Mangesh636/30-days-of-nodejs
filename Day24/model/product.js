/* Importing mongoose from mongoose */
const mongoose = require("mongoose");

/* Defining ProductSchema */
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Exporting ProductSchema */
const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;
