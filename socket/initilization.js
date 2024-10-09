import { Server as SocketIOServer } from "socket.io";
import { socket_modules } from "./socket_modules.js";

let io; // Socket.IO server instance

function initSocket(server) {
  io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    // Socket Modules
    socket_modules(io, socket);

    // Example: Handle disconnect event
    socket.on("disconnect", () => {
      console.log(`Socket disconnected: ${socket.id}`);
    });
  });
}

export { initSocket, io };
