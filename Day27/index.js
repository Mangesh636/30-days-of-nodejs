/* Importing express & jsonwebtoken */
const express = require("express");
const jwt = require("jsonwebtoken");

/* Initializing express */
const app = express();
const secrectKey = "scaler-task";

/* Function for role based authentication */
const authenticateAndAuthorize = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secrectKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid Token" });
  }
};

/* Authentication route */
app.get("/auth", (req, res) => {
  const user = {
    username: "Mangesh",
    password: "Mangesh123",
    role: "admin",
  };
  const token = jwt.sign(user, secrectKey, { expiresIn: "300s" });
  res.json({ token });
});

app.use(authenticateAndAuthorize);

/* Route to know user role */
app.get("/role", (req, res) => {
  if (req.user.role === "admin") {
    res.json({ message: "Welcome Admin" });
  } else {
    res.json({ message: "Welcome Guest" });
  }
});

/* Listening the server */
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
