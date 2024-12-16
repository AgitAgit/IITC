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

const messageLogs = {
  General:[],
  FullyStuck:[],
  Room3000:[]
}

// start a connection:
io.on("connection", (socket) => {
  console.log("a client connected", socket.id);

  // Listen for join event
  socket.on("join", (username, currentChatRoom) => {
    console.log(`${username} joined chat:${currentChatRoom}`);
    socket.username = username; // Save username in socket object
    socket.chat = currentChatRoom;
    socket.join(currentChatRoom);
    // Broadcast message to all connected clients except the one who joined
    socket.to(currentChatRoom).emit("message", {
      by: "System",
      text: `${socket.username} has joined the ${currentChatRoom} chat`,
    });
  });

  // Listen for message event
  socket.on("message", (messageText) => {
    console.log(messageText);
    const messageObject = {
      by: socket.username,
      text: messageText
    }
    messageLogs[socket.chat].push(messageObject);
    io.to(socket.chat).emit("message", messageObject);
    console.log(messageLogs);
  });

  socket.on("user-typing-message", () => {
    // console.log("typing");
    socket.to(socket.chat).emit("user-typing-message", socket.username);
  });

  socket.on("request-context", () => {
    const contextArr = [];//need to implement this with the latest messages.
    socket.to(socket.id).emit('supply-context',contextArr);//last here---------------------------------------------------------------
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
