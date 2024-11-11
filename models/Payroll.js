const payrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    salary: Number,
    deductions: Number,
    bonuses: Number,
    netPay: Number
  });
  
  module.exports = mongoose.model("Payroll", payrollSchema);
  