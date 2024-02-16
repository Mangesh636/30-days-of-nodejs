/* Importing the express */
const express = require("express");
const mongoose = require("mongoose");

/* Initializing express */
const app = express();

/* Function to connect with MongoDB */
function connectToMongoDB() {
  mongoose
    .connect("mongodb://localhost:27017")
    .then((e) => console.log("Succesfully connected to mongoDB"))
    .catch(console.error);
}

/* Calling the routes */
app.get("/");

app.use(connectToMongoDB);

app.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
