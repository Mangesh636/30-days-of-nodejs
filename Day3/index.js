/* Importing the spawn module */
const { spawn } = require("child_process");

/* Function to execute command */
function executeCommand(command) {
  try {
    const child = spawn(command, { shell: true });

    child.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    child.stderr.on("data", (err) => {
      console.error(err.toString());
    });

    child.on("close", (code) => {
      console.log(`command exited with code ${code}`);
    });
  } catch (error) {
    console.log(`Error executing command ${error.message}`);
  }
}

/* Executing command */
executeCommand("ls -la");
executeCommand('echo "Hello, Node.js!"');
