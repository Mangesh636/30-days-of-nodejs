/* Importing the fs module */
const FS = require("fs").promises;

/* Function to Read the file content */
async function readFileContent(filePath) {
  try {
    const data = await FS.readFile(filePath, "utf8");
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error while reading the file: ${error.message}`);
  }
}

/* Reading file content */
readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/nonexistent-file.txt");