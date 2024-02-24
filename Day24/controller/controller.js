/* Importing product model */
const Product = require("../model/product");

/* Express route to create a new product */
const createProductRoute = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* Express route to retrieve all products */
const getAllProductsRoute = async (req, res) => {
  try {
    const product = await Product.find(req.query);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* Express route to update a product */
const updateProductRoute = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* Express route to delete a product */
const deleteProductRoute = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ message: "Product successfully deleted." });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createProductRoute,
  getAllProductsRoute,
  updateProductRoute,
  deleteProductRoute,
};

/**
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
