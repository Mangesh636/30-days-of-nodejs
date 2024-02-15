/* Importing the express */
const express = require("express");

/* Initializing express */
const app = express();

/* Function for Logging Data */
function loggingMiddleware(req, res, next) {
  const TimeStamp = new Date().toDateString();
  const Method = req.method;
  const URL = req.url;

  console.log(`TimeStamp: ${TimeStamp}`);
  console.log(`Method: ${Method}`);
  console.log(`URL: ${URL}`);
  console.log(req.headers);
  console.log(req.body);

  next();
}

app.use(express.json());
app.use(loggingMiddleware);

/* Listening on port */
app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
