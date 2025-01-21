import express from "express";
import jwt from "jsonwebtoken";
import { globalRequest, jwtsecret } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post("/signup", (req, res) => {
  //db -call
});

app.post("/signin", (req, res) => {
  //db -call
  const userId = 1;
  const token = jwt.sign({ userId }, jwtsecret);

  res.json({ token });
});

app.post("/room", middleware, (req, res) => {
  //db -call
  res.json({ roomId: 123 });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
