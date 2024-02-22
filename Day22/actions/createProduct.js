/* Importing Product model */
const Product = require("../db/product");

const createProduct = async (req, res) => {
  try {
    const newProduct = Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json(error.message);
    console.log(`Can not save product to database an error occured. ${error}`);
  }
};

module.exports = createProduct;

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
