/* Importing express & mongoose */
const express = require("express");
const mongoose = require("mongoose");

/* Initializing express */
const app = express();

/* Defining UserSchema */
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

/* Creating the user model  */
const User = mongoose.model("User", UserSchema);
module.exports = User;

/* Connecting to mongodb  */
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/scaler")
    .then((e) => console.log("Succesfully connected to mongoDB."))
    .catch(console.error);
};

connectDB();

/* Function to get user */
const getAllUsers = async (req, res) => {
  try {
    const getUser = await User.find();

    res.json(getUser);
  } catch (error) {
    res.status(400);
  }
};

/* Finding users */
app.get("/users", getAllUsers);

/* Listening the server */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
