import React, { useState } from "react";
import axios from "axios";

const CreateRoom = () => {
  const [roomCode, setRoomCode] = useState("");

  const createRoom = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/rooms");
      setRoomCode(res.data.roomCode);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={createRoom}>Create Room</button>
      {roomCode && <p>Room Code: {roomCode}</p>}
    </div>
  );
};

export default CreateRoom;
