/* Importing mongoose */
const mongoose = require("mongoose");

/* Defining CategorySchema */
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Creating the category model  */
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
