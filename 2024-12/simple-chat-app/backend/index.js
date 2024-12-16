const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

// start a connection:
io.on("connection", (socket) => {
  console.log("a client connected", socket.id);

  // Listen for join event
  socket.on("join", (username) => {
    console.log(`${username} joined chat`);
    socket.username = username; // Save username in socket object
    // Broadcast message to all connected clients except the one who joined
    socket.broadcast.emit("message", {
      by: "System",
      text: `${socket.username} has joined the chat`,
    });
  });

  // Listen for message event
  socket.on("message", (messageText) => {
    console.log(messageText);
    io.emit("message", {
      by: socket.username,
      text: messageText,
    });
  });

  socket.on("user-typing-message", () => {
    console.log("typing");
    socket.broadcast.emit("user-typing-message", socket.username);
  });

  // end a connection:
  socket.on("disconnect", () => {
    if (!socket.username) return;
    console.log("a client disconnected", socket.id);
    io.emit("message", {
      by: "System",
      text: `${socket.username} has left the chat`,
    });
  });
});

const PORT = 3000;

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
