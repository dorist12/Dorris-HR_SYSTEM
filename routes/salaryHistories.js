const express = require("express");
const router = express.Router();

// Basic route for salary histories
router.get("/", (req, res) => {
  res.send("This is the salary histories route");
});

module.exports = router;
