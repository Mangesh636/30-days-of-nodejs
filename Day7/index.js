/* Importing the express module */
const Express = require("express");

/* Initializing express */
const app = Express();

/* Defining the port */
const port = 3000;

/* Function to log incoming requests */
function requestLoggerMiddleware(req, res, next) {
  const TimeStamp = new Date().toString();
  const Method = req.method;

  console.log(`${TimeStamp} - ${Method} request received.`);

  next();
}

app.use(requestLoggerMiddleware)

/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
