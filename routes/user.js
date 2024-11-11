const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // No token provided

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user; // Save user data to req.user
    next();
  });
}

// Route to get user info
router.get("/me", authenticateToken, (req, res) => {
  // Replace this with actual user data from a database in production
  res.json({ name: "John Doe", email: req.user.email });
});

module.exports = router;
