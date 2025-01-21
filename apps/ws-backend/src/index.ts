import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtsecret } from "./config";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws, Request) => {
  const url = Request.url;
  if (!url) {
    return;
  }

  const queryparams = new URLSearchParams(url.split("?")[1]);
  const token = queryparams.get("token") as string;

  const decoded = jwt.verify(token, jwtsecret);

  if (!(decoded as JwtPayload).userId || decoded) {
    ws.send("Unauthorized");
    ws.close();
    return;
  }

  ws.on("message", (data) => {
    console.log(`Received message => ${data}`);
    ws.send(`You sent => ${data}`);
  });
});
