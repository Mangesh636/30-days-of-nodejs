/* Importing & mongoose */
const mongoose = require("mongoose");

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

/* Function to add user */
const addUserToDatabase = async (user) => {
  try {
    const newUser = new User(user);

    await newUser.save();

    console.log("User added to database succesfully.");
  } catch (error) {
    console.log(`Can not save user to database an error occured. ${error}`);
  }
};

/* Calling the function */
addUserToDatabase({
  username: "Mangesh",
  email: "mangeshbhardwaj007@gmil.com",
});
