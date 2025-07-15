const express = require("express");
const path = require("path");
const open = require("open");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, "src")));

// Serve the main HTML file at root
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

// Health check endpoint
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    project: "Cocktail Shopping List",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `🚀 Cocktail Shopping List - Server running at http://localhost:${PORT}`
  );
  console.log(`📁 Serving files from: ${path.join(__dirname, "src")}`);
  console.log(`🌐 Open in browser: http://localhost:${PORT}`);
  console.log(`💡 Press Ctrl+C to stop the server`);

  // Automatically open browser
  open(`http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Server shutting down gracefully...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("\n🛑 Server shutting down gracefully...");
  process.exit(0);
});
