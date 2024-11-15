const mongoose = require("mongoose");

const salaryHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model("SalaryHistory", salaryHistorySchema);
