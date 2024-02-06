/* Importing the express module */
const Express = require("express");

/* Initializing express */
const app = Express();

/* Defining the port */
const port = 3000;

/* Function to handle routes */
function greetHandler(req, res) {
  const name = req.query.name || "guest";

  res.send(`Hello, ${name}`);
}

/* Calling the routes */
app.get("/greet?name=Mangesh", greetHandler);
app.get("/greet", greetHandler);

/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
