const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  score: { type: Number, required: true },
  feedback: { type: String }
});

module.exports = mongoose.model("Evaluation", evaluationSchema);
