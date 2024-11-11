const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Should be hashed
  name: { type: String },
  role: { type: String }
});

module.exports = mongoose.model("User", userSchema);
