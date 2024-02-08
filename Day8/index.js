/* Importing the express module */
const express = require("express");

/* Initializing express */
const app = express();

/* Defining the port */
const port = 3000;

/* Function to check if number is positive or not */
function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.send(`${number} is positive.`);
  } else {
    throw new Error("Number must be positive or non-zero.");
  }
}

/* Function to handle error */
function errorHandlerMiddleware(res, req, next, err) {
  if (
    err.message.includes(
      "Invalid parameter: 'number' must be a positive integer. "
    )
  ) {
    res.status(400).send("Bad Request: 'number' must be positive or non-zero.");
  } else {
    res.status(500).send("Internal server error.");
  }
}

/* Calling the routes */
app.get("/positive", positiveIntegerHandler);

/* Passing the errorhandler */
app.use(errorHandlerMiddleware);

/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
