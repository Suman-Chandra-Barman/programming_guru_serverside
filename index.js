const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Programming Guru Server is Running...");
});

app.listen(port, () => {
  console.log(`Programming Guru server running on port ${port}`);
});