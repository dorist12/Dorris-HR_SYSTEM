const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  date: { type: Date, required: true },
  clockIn: { type: Date },
  clockOut: { type: Date }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
