const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users  ", (req, res) => {
  res.send("users");
});

app.post("/user  ", (req, res) => {
  res.send("post user");
});

app.get("/users/:userId", (req, res) => {
  res.send(`user ${req.params.userId}`);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
