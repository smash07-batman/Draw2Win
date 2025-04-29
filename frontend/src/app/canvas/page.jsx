"use client";

import { Button } from "../../components/ui/button";
import { EraserIcon, PencilIcon, Undo, Redo, XCircle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { io } from "socket.io-client";

const Sketch = () => {
  const socket = useRef(null);
  const canvasRef = useRef(null);

  // Cursor styles for pencil and eraser
  const eraserCursor = `url("data:image/svg+xml,%3Csvg height='32px' width='32px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg%3E%3Cg%3E%3Cpath d='M509.607,173.926L338.073,2.393C336.542,0.861,334.463,0,332.297,0s-4.245,0.861-5.777,2.393L87.126,241.787 c-3.191,3.191-3.191,8.364,0,11.554l1.926,1.926L2.393,341.926c-3.191,3.191-3.191,8.364,0,11.554l156.127,156.127 c1.595,1.595,3.686,2.393,5.777,2.393c2.09,0,4.182-0.797,5.777-2.393l86.659-86.659l1.926,1.926 c1.595,1.595,3.686,2.393,5.777,2.393c2.09,0,4.182-0.797,5.777-2.393L509.607,185.48c1.533-1.532,2.393-3.61,2.393-5.777 S511.139,175.458,509.607,173.926z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 0 32, auto`;

  const pencilCursor = `url("data:image/svg+xml,%3Csvg fill='%23000000' height='32px' width='32px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cg%3E%3Cg%3E%3Cpath d='M509.607,2.394c-2.332-2.332-5.837-3.034-8.888-1.778l-130.88,53.893c-0.271,0.109-0.537,0.233-0.799,0.371 c-0.251,0.136-0.472,0.267-0.687,0.411c-0.05,0.034-0.097,0.073-0.147,0.108c-0.169,0.118-0.338,0.237-0.499,0.369 c-0.21,0.172-0.413,0.354-0.605,0.547L56.315,367.103c-0.193,0.193-0.375,0.394-0.547,0.605c-0.141,0.171-0.267,0.35-0.392,0.529 c-0.027,0.039-0.059,0.076-0.085,0.115c-0.317,0.474-0.578,0.974-0.784,1.49L0.616,500.719c-1.256,3.049-0.554,6.556,1.778,8.888 C3.957,511.17,6.046,512,8.173,512c1.047,0,2.104-0.202,3.109-0.615l130.878-53.891c0.272-0.109,0.539-0.233,0.801-0.373 c0.243-0.131,0.468-0.265,0.686-0.411c0.048-0.032,0.093-0.07,0.139-0.102c0.171-0.12,0.342-0.24,0.505-0.375 c0.21-0.172,0.413-0.354,0.605-0.547l310.788-310.788c0.193-0.193,0.375-0.394,0.547-0.605c0.138-0.169,0.264-0.345,0.387-0.522 c0.03-0.042,0.064-0.082,0.091-0.124c0.317-0.475,0.578-0.974,0.785-1.491l53.89-130.875 C512.641,8.233,511.939,4.726,509.607,2.394z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 0 32, auto`;

  const styles = {
    border: "0.0625rem solid #9c9c9c",
    borderRadius: "0.25rem",
    cursor: pencilCursor,
    transition: "transform 0.2s ease",
  };

  const eraserStyles = {
    ...styles,
    cursor: eraserCursor,
    transition: "transform 0.2s ease",
  };

  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const [isPencil, setIsPencil] = useState(true);
  const [paint, setPaint] = useState("#ffffff");
  const [users, setUsers] = useState(["User1", "User2", "User3"]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.current = io("http://localhost:4000");

    socket.current.on("updatePlayers", (players) => {
      setUsers(players);
    });

    socket.current.on("receiveMessage", (messageData) => {
      setMessages((prevMessages) => [...prevMessages, messageData]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  function handleEraser() {
    setIsEraser(true);
    setIsPencil(false);
    canvasRef.current?.eraseMode(true);
  }

  function handlePencil() {
    setIsPencil(true);
    setIsEraser(false);
    canvasRef.current?.eraseMode(false);
  }

  function handleUndo() {
    canvasRef.current?.undo(true);
  }

  function handleRedo() {
    canvasRef.current?.redo(true);
  }

  function handleClear() {
    canvasRef.current?.clearCanvas(true);
  }

  function handleStrokeWidthChange(event) {
    setStrokeWidth(event.target.value);
  }

  function handleColorChange(color) {
    setStrokeColor(color);
  }

  function sendMessage() {
    if (message.trim() !== "") {
      const messageData = {
        user: "User",
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.current.emit("sendMessage", { roomId: "room1", message });
      setMessages([...messages, messageData]);
      setMessage("");
    }
  }

  return (
    <div className="h-screen flex bg-gradient-to-r from-blue-200 to-indigo-300">
      {/* Left Panel - User List */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-xl mx-2">
        <h3 className="font-bold text-2xl mb-4 text-gray-700">Users</h3>
        <ul className="space-y-3">
          {users.map((user, index) => (
            <li key={index} className="text-lg text-gray-800">
              {user}
            </li>
          ))}
        </ul>
      </div>

      {/* Center Panel - Canvas */}
      <div className="w-1/2 p-6 bg-white rounded-lg shadow-xl mx-2">
        <div className="flex space-x-6 mb-6">
          <Button
            onClick={handlePencil}
            style={isPencil ? styles : eraserStyles}
            className="hover:scale-105 transition-all"
          >
            <PencilIcon size={20} />
            Pencil
          </Button>
          <Button
            onClick={handleEraser}
            style={isEraser ? eraserStyles : styles}
            className="hover:scale-105 transition-all"
          >
            <EraserIcon size={20} />
            Eraser
          </Button>
          <Button
            onClick={handleUndo}
            className="hover:scale-105 transition-all"
          >
            <Undo size={20} />
            Undo
          </Button>
          <Button
            onClick={handleRedo}
            className="hover:scale-105 transition-all"
          >
            <Redo size={20} />
            Redo
          </Button>
          <Button
            onClick={handleClear}
            className="hover:scale-105 transition-all"
          >
            <XCircle size={20} />
            Clear
          </Button>
        </div>

        {/* Color Palette */}
        <div className="flex space-x-3 mb-6">
          {[
            "#000000",
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FFFF00",
            "#00FFFF",
          ].map((color) => (
            <div
              key={color}
              onClick={() => handleColorChange(color)}
              className="w-10 h-10 rounded-full cursor-pointer shadow-lg transform transition-all hover:scale-110"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Stroke Width */}
        <div className="mb-6">
          <label
            htmlFor="stroke-width"
            className="block text-sm font-medium text-gray-700"
          >
            Stroke Width: {strokeWidth}
          </label>
          <input
            type="range"
            id="stroke-width"
            min="1"
            max="10"
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
            className="w-full"
          />
        </div>

        {/* Drawing Canvas */}
        <div className="relative">
          <ReactSketchCanvas
            ref={canvasRef}
            width="100%"
            height="450px"
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            backgroundColor={paint}
            className="border-2 rounded-md shadow-lg"
            style={{
              cursor: isPencil ? pencilCursor : eraserCursor, // Change cursor dynamically
            }}
          />
        </div>
      </div>

      {/* Right Panel - Chatbox */}
      <div className="w-1/3 p-6 bg-white rounded-lg shadow-xl mx-2">
        <h3 className="font-bold text-2xl mb-4 text-gray-700">Chat</h3>
        <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-semibold text-gray-800">{msg.user}</p>
              <p>{msg.text}</p>
              <span className="text-sm text-gray-500">{msg.timestamp}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            onClick={sendMessage}
            className="hover:scale-105 transition-all"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sketch;
