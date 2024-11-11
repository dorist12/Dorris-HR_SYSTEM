const express = require("express");
const router = express.Router();

// Basic route for evaluations
router.get("/", (req, res) => {
  res.send("This is the evaluation route");
});

module.exports = router;
