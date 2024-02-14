/* Importing the express & node-cache */
const express = require("express");
const NodeCache = require("node-cache");
const axios = require("axios");

/* Initializing express & node-cache */
const app = express();
const myCache = new NodeCache({ stdTTL: 30 }); // Timeout 30s

/* Function for rate limitation */
const cachingMiddleware = (req, res, next) => {
  const key = req.url;
  const cacheContent = myCache.get(key);

  if (cacheContent) {
    return res.send(cacheContent);
  } else {
    const response = res.send;
    res.send = (body) => {
      myCache.set(key, body);
      response.call(res, body);
    };
  }

  next();
};

app.get("/todos", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/?completed=true"
  );
  res.send(data);
});

app.use(cachingMiddleware);

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
