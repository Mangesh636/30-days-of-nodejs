/* Importing the path module */
const Path = require("path");

/* Function to resolve path */
function checkFileExtension(filePath, expectedExtension) {
  const ext = Path.extname(filePath);

  if (ext === expectedExtension) {
    console.log(`File has the expected extension: ${expectedExtension}`);
  } else {
    console.log(
      `File does not have the expected extension. Expected Extension: ${expectedExtension} Actual Extension: ${ext}`
    );
  }
}

/* Path to be Resolved */
checkFileExtension("Day5/index.js", ".js");
checkFileExtension("Day5/Question.md", ".txt");
