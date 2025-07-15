const express = require("express");
const path = require("path");
const open = require("open");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `🚀 Cocktail Shopping List - Server running at http://localhost:${PORT}`
  );

  open(`http://localhost:${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("🛑 Server shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("\n🛑 Server shutting down gracefully...");
  process.exit(0);
});
