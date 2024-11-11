const SalaryHistory = require("../models/SalaryHistory");

// Get all salary histories
exports.getSalaryHistories = async (req, res) => {
  try {
    const salaryHistories = await SalaryHistory.find();
    res.json(salaryHistories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching salary histories" });
  }
};

// Create a new salary history record
exports.createSalaryHistory = async (req, res) => {
  try {
    const salaryHistory = new SalaryHistory(req.body);
    await salaryHistory.save();
    res.status(201).json(salaryHistory);
  } catch (error) {
    res.status(500).json({ message: "Error creating salary history" });
  }
};

// Update a salary history by ID
exports.updateSalaryHistory = async (req, res) => {
  try {
    const salaryHistory = await SalaryHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!salaryHistory) return res.status(404).json({ message: "Salary history not found" });
    res.json(salaryHistory);
  } catch (error) {
    res.status(500).json({ message: "Error updating salary history" });
  }
};

// Delete a salary history by ID
exports.deleteSalaryHistory = async (req, res) => {
  try {
    const salaryHistory = await SalaryHistory.findByIdAndDelete(req.params.id);
    if (!salaryHistory) return res.status(404).json({ message: "Salary history not found" });
    res.json({ message: "Salary history deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting salary history" });
  }
};
