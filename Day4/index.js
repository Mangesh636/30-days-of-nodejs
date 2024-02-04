/* Importing the path module */
const Path = require("path");

/* Function to resolve path */
function resolvePath(relativePath) {
  const absolutePath = Path.resolve(__dirname, relativePath);
  console.log(`Resolved Path: ${absolutePath}`);
}

/* Path to be Resolved */
resolvePath("../30-days-of-nodejs/day4/index.js");
resolvePath("nonexistent-folder/index.js");
