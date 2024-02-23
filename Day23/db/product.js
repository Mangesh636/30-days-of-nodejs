/* Importing mongoose */
const mongoose = require("mongoose");

/* Defining ProductSchema */
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
);

/* Creating the product model  */
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
