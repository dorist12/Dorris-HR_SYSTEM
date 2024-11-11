const mongoose = require("mongoose");

const leaveRequestSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: String,
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
});

module.exports = mongoose.model("LeaveRequest", leaveRequestSchema);
