/* Importing the express */
const express = require("express");

/* Initializing express */
const app = express();

/* Function for error handling */
const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  if (err.status) {
    res.status(err.status).send({ error: err.message });
  } else {
    res.status(500).send({ error: "Something went wrong!" });
  }

  next();
};

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  next(error);
});

app.use(errorHandler); //passing error handler

/* Listening on port */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} err - Express err object
 * @param {Function} next - Express next function
 */
