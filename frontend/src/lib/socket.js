// src/socket.js
import { io } from "socket.io-client";
export const socket = io("http://localhost:3001"); // Use backend URL if hosted
