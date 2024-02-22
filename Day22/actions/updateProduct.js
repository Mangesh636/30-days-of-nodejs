/* Importing Product model */
const Product = require("../db/product");

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = updateProduct;

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
