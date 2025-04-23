const express = require("express");
const cors = require("cors");
const encrypt = require("./script.js"); // Import the encrypt function

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to generate JWT
app.post("/token", (req, res) => {
  const { userId, role } = req.body;
  const secretKey = "supersecretkey"; // Replace with a secure key in production
  const token = encrypt({ userId, role }, secretKey);
  res.json({ token });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});