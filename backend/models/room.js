const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomCode: { type: String, required: true, unique: true },
  players: [{ name: String, socketId: String }],
  gameState: { type: String, default: "waiting" },
});

module.exports = mongoose.model("Room", roomSchema);
