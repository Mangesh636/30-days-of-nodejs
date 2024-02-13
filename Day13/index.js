/* Importing the express, http & websocket */
const express = require("express");
const { createServer } = require("http");
const { join } = require("path");
const WebSocket = require("ws");

/* Initializing express and creating server */
const app = express();
const server = createServer(app);

/* Function for rate limitation */
function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    console.log("a user is connected");

    ws.on("message", (message) => {
      console.log(`New message: ${message}`);
    });

    ws.on("close", () => {
      console.log("a user is disconnected");
    });
  });
}

app.get("/websocket", (req, res) => {
  res.sendFile(join(__dirname + "/index.html"));
});

setupWebSocket(server);

/* Listening on port */
server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
