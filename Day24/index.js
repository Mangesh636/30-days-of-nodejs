/* Importing mongoose & body-parser */
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

/* Importing router & controllers */
const app = express();
const {
  createProductRoute,
  getAllProductsRoute,
  updateProductRoute,
  deleteProductRoute,
} = require("./controller/controller");

/* Connecting to mongodb  */
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/scaler")
    .then((e) => console.log("Succesfully connected to mongoDB."))
    .catch(console.error);
};

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Express route to create a new product */
app.post("/product/add", createProductRoute);

/* Express route to retrieve all products */
app.get("/products", getAllProductsRoute);

/* Express route to update a product */
app.put("/product/:id", updateProductRoute);

/* Express route to delete a product */
app.delete("/product/:id", deleteProductRoute);

/* Listening the server */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
