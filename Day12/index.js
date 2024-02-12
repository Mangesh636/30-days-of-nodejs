/* Importing the express & express-rate-limit module */
const express = require("express")
const setRateLimit = require("express-rate-limit");

/* Initializing express */
const app = express();

/* Defining the port */
const port = 3000;

/* Function for rate limitation */
function createRateLimitMiddleware() {
  return setRateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: "Too many requests try again later",
    standardHeaders: true,
  });
}
const rateLimitMiddleware = createRateLimitMiddleware();

app.get("/", rateLimitMiddleware, (req, res) => {
  res.json({ message: "Server is running" });
});


/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
