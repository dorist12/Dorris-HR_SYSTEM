const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const User = require("./models/User"); // Make sure this path is correct

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas using the connection string in your .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB Atlas");

    // User details
    const email = "dorristazi3@gmail.com"; // Replace with the desired email
    const plainPassword = "Bokova22!";  // Replace with the desired password

    // Hash the password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Create a new user instance
    const user = new User({
      email: email,
      password: hashedPassword,
      // Add any other required fields here, like name or role, if necessary
    });

    // Save the user to the database
    await user.save();
    console.log("User created successfully");

    // Close the database connection
    mongoose.connection.close();
  })
  .catch(err => console.error("Error connecting to MongoDB:", err));
