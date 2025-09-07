import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", (socket) => {
  client.userAgent.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hi you are connected to websocket server");
});
