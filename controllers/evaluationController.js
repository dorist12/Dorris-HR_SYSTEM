const Evaluation = require("../models/Evaluation");

// Get all evaluations
exports.getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching evaluations" });
  }
};

// Create a new evaluation
exports.createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: "Error creating evaluation" });
  }
};

// Update an evaluation by ID
exports.updateEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evaluation) return res.status(404).json({ message: "Evaluation not found" });
    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ message: "Error updating evaluation" });
  }
};

// Delete an evaluation by ID
exports.deleteEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.id);
    if (!evaluation) return res.status(404).json({ message: "Evaluation not found" });
    res.json({ message: "Evaluation deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting evaluation" });
  }
};
