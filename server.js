const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(cors({ 
  origin: 'http://127.0.0.1:5500', // Replace with the actual URL of your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true // Allow cookies and authorization headers
}));

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// Import and use routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const leaveRoutes = require("./routes/leaves");
const evaluationRoutes = require("./routes/evaluation");
const departmentRoutes = require("./routes/departments");
const salaryHistoryRoutes = require("./routes/salaryHistories");
const employeeRoutes = require("./routes/employee");
const attendanceRoutes = require("./routes/attendance");

// Update route paths to match expected frontend paths
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/salaryHistories", salaryHistoryRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
