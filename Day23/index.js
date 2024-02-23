/* Importing mongoose */
const mongoose = require("mongoose");

/* Importing product category */
const Product = require("./db/product");
const Category = require("./db/category");

/* Connecting to mongodb  */
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/scaler")
    .then((e) => console.log("Succesfully connected to mongoDB."))
    .catch(console.error);
};

connectDB();

/* Function to Retrieves all products with populated category */
const getProductsPopulatedWithCategory = async () => {
  try {
    const products = await Product.find().populate("category").exec();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const runner = async () => {
  try {
    const category = await Category.create({
      name: "Hardware",
    });

    await Product.create({
      name: "CPU",
      price: 200,
      quantity: 10,
      category: category._id,
    });

    const products = await getProductsPopulatedWithCategory();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};
runner();

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
