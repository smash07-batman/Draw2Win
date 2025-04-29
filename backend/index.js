const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // your React app URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.static("public"));

const rooms = {}; // store all rooms and their players

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Handle creating a room
  socket.on("createRoom", ({ username, roomId }) => {
    console.log(`${username} created room ${roomId}`);

    socket.join(roomId);

    // Initialize the room if not exists
    rooms[roomId] = rooms[roomId] || {
      players: {},
      drawings: [],
      chatMessages: [],
    };

    rooms[roomId].players[socket.id] = { username };

    // Emit the player list to all users in the room
    io.to(roomId).emit("updatePlayers", Object.values(rooms[roomId].players));
  });

  // Handle joining a room
  socket.on("joinRoom", ({ username, roomId }) => {
    if (!rooms[roomId]) {
      socket.emit("error", "Room does not exist");
      return;
    }

    socket.join(roomId);

    rooms[roomId].players[socket.id] = { username };

    console.log(`${username} joined room ${roomId}`);

    // Emit the updated player list to everyone in the room
    io.to(roomId).emit("updatePlayers", Object.values(rooms[roomId].players));
  });

  // Handle sending drawings
  socket.on("sendDrawing", ({ roomId, drawingData }) => {
    if (!rooms[roomId]) return;

    rooms[roomId].drawings.push(drawingData);

    // Broadcast drawing to everyone except sender
    socket.to(roomId).emit("receiveDrawing", drawingData);
  });

  // Handle clearing canvas
  socket.on("clearCanvas", ({ roomId }) => {
    if (!rooms[roomId]) return;

    rooms[roomId].drawings = [];

    io.to(roomId).emit("clearCanvas");
  });

  // Handle sending chat messages
  socket.on("sendMessage", ({ roomId, message }) => {
    if (!rooms[roomId]) return;

    const messageData = {
      user: rooms[roomId].players[socket.id]?.username || "Unknown User",
      text: message,
      timestamp: new Date().toLocaleTimeString(),
    };

    rooms[roomId].chatMessages.push(messageData);

    // Broadcast message to everyone in the room
    io.to(roomId).emit("receiveMessage", messageData);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    // Remove the user from all rooms
    for (const roomId in rooms) {
      if (rooms[roomId].players[socket.id]) {
        delete rooms[roomId].players[socket.id];

        // Emit the updated player list after a user disconnects
        io.to(roomId).emit(
          "updatePlayers",
          Object.values(rooms[roomId].players)
        );

        // If the room is empty, delete it
        if (Object.keys(rooms[roomId].players).length === 0) {
          delete rooms[roomId];
        }

        break;
      }
    }
  });
});

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
