const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Log the JWT_SECRET to confirm it’s being loaded correctly
console.log("JWT Secret:", process.env.JWT_SECRET);

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  // Replace this with real user authentication logic (e.g., database query)
  if (email === "dorristazi3@gmail.com" && password === "Manyu22") {
    // Generate a JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token }); // Return token to the client
  } else {
    return res.status(401).json({ message: "Invalid credentials" }); // Send 401 Unauthorized
  }
});

module.exports = router;
