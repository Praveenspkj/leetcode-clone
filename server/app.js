// Import necessary modules
const express = require("express");
const path = require("path");
const app = express();
const problemsSets = require("./src/routes/problemsets");

// Serve static files (e.g., HTML, CSS, client-side JavaScript)
app.use(express.static(path.join(__dirname, "public")));

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to leetcode" });
});

app.use("/problems", problemsSets);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
