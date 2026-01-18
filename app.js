const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 App deployed successfully on AWS EC2!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
