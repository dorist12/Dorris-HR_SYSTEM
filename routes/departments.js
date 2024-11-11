const express = require("express");
const router = express.Router();

// Basic route for departments
router.get("/", (req, res) => {
  res.send("This is the departments route");
});

module.exports = router;
