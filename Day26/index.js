/* Importing mongoose */
const mongoose = require("mongoose");

/* Definig ProductSchema */
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
  },
  { timestamps: true }
);

/* Exporting ProductSchema */
const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;

/* Connecting to mongodb  */
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/scaler")
    .then((e) => console.log("Succesfully connected to mongoDB."))
    .catch(console.error);
};

connectDB();

/* Function to Executes an aggregation pipeline to calculate product statistics */

const getProductStatistics = async () => {
  try {
    const getProduct = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalProduct: { $sum: 1 },
          averagePrice: { $avg: "$price" },
          highestQuantity: { $max: "$quantity" },
        },
      },
    ]);

    console.log(`totalProduct: ${getProduct[0].totalProduct}`);
    console.log(`averagePrice: ${getProduct[0].averagePrice}`);
    console.log(`highestQuantity: ${getProduct[0].highestQuantity}`);
  } catch (error) {
    console.log(error);
  }
};

getProductStatistics();
