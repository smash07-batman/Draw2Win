require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Create HTTP server with Express
const server = http.createServer(app);

// Initialize Socket.io with the server
const io = new Server(server, {
  cors: {
    origin: '*', // In production, restrict this to specific origins
    methods: ['GET', 'POST']
  }
});

// Basic Express route
app.get('/', (req, res) => {
  res.send('Draw2Win Server is running');
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  // Handle drawing data
  socket.on('draw', (data) => {
    // Broadcast drawing data to all clients except the sender
    socket.broadcast.emit('draw', data);
  });
  
  // Handle room joining
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
    
    // Notify room members about new user
    socket.to(roomId).emit('user-joined', socket.id);
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});