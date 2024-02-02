/* Importing the fs module */
const FS = require("fs");

/* Function to Write the file content */
function writeToFile(filePath, content) {
  FS.writeFile(filePath, content, (err) => {
    if (err) {
      console.log(`Error while writing to file ${err.message}`);
    } else {
      console.log(`Data written to ${filePath}`);
    }
  });
}

/* Writing file content */
writeToFile("test-files/output1.txt", "Hello Node.Js.");
writeToFile(
  "test-files/nonexistent-folder/output.txt",
  "Content in a non-existent folder."
);