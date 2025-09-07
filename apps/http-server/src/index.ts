import * as express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  client.user.insert;
  res.send("Hi there");
});

app.listen(3000);
