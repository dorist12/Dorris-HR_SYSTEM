const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance");
const LeaveRequest = require("../models/LeaveRequest");

// Add attendance (Clock In/Clock Out)
router.post("/attendance", async (req, res) => {
  const { employeeId, date, clockIn, clockOut } = req.body;
  try {
    const attendance = new Attendance({ employeeId, date, clockIn, clockOut });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    console.error("Error saving attendance:", error); // Log the error
    res.status(500).json({ message: "Error saving attendance" });
  }
});

// Add leave request
router.post("/", async (req, res) => { // Updated path here to match the frontend
  const { employeeId, startDate, endDate, reason } = req.body;
  try {
    const leaveRequest = new LeaveRequest({ employeeId, startDate, endDate, reason });
    await leaveRequest.save();
    res.status(201).json(leaveRequest);
  } catch (error) {
    console.error("Error saving leave request:", error); // Log the error for more details
    res.status(500).json({ message: "Error saving leave request" });
  }
});

module.exports = router;
