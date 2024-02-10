/* Importing the express & path module */
const express = require("express");
const path = require("path");

/* Initializing express */
const app = express();

/* Defining the port */
const port = 3000;

/* Function to serve static folder */
function staticFileServer(req, res) {
  const publicPath = path.join(__dirname, "public");

  express.static(publicPath)(req, res, () => {});

  if (req.url === "/") {
    res.sendFile(path.join(publicPath, "index.html"));
  }
}

/* Passing the staticfiles */
app.use(staticFileServer);

/* Listening on port */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
