// src/App.jsx
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000"); // Backend URL

function App() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [players, setPlayers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("updatePlayers", (playersList) => {
      setPlayers(playersList);
    });

    socket.on("receiveDrawing", (drawing) => {
      drawLine(drawing, false);
    });

    socket.on("clearCanvas", () => {
      clearCanvas();
    });

    return () => {
      socket.off("updatePlayers");
      socket.off("receiveDrawing");
      socket.off("clearCanvas");
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const drawingData = {
      x,
      y,
      color: "black",
      thickness: 2,
    };

    drawLine(drawingData, true);

    socket.emit("sendDrawing", { roomId, drawingData });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const drawLine = (drawing, isLocal) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(drawing.x, drawing.y, drawing.thickness, 0, 2 * Math.PI);
    ctx.fillStyle = drawing.color;
    ctx.fill();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleCreateRoom = () => {
    if (!username || !roomId) return;
    socket.emit("createRoom", { username, roomId });
  };

  const handleJoinRoom = () => {
    if (!username || !roomId) return;
    socket.emit("joinRoom", { username, roomId });
  };

  const handleClearCanvas = () => {
    socket.emit("clearCanvas", { roomId });
    clearCanvas();
  };

  return (
    <div>
      <h1>Draw2Win</h1>

      <input
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create Room</button>
      <button onClick={handleJoinRoom}>Join Room</button>

      <h2>Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.username}</li>
        ))}
      </ul>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>

      <button onClick={handleClearCanvas}>Clear Canvas</button>
    </div>
  );
}

export default App;
