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
    age: {
      type: Number,
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

/* Function calculate average user age */
const averageAgeOfUsers = async (req, res) => {
  try {
    const getUser = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" },
        },
      },
    ]);

    res.json({ averageAge: getUser[0].averageAge });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

/* Finding users */
app.get("/average-age", averageAgeOfUsers);

/* Listening the server */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
