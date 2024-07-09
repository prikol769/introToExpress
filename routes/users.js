const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("users");
});

router.post("/", (req, res) => {
  res.send("post user");
});

router.get("/:userId", (req, res) => {
  res.send(`user ${req.params.userId}`);
});

module.exports = router;
