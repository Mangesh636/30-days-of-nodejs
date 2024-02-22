/* Importing Product model */
const Product = require("../db/product");

const deleteProduct = async (req, res) => {
  try {
    const removedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(removedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = deleteProduct;

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
