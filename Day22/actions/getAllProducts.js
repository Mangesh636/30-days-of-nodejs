/* Importing Product model */
const Product = require("../db/product");

const getAllProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllProducts;

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
