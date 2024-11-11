const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Example login logic (replace with actual logic)
      if (email === "test@example.com" && password === "password") {
        res.status(200).json({ message: "Login successful!" });
      } else {
        res.status(401).json({ error: "Invalid email or password." });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred during login." });
    }
  };
  
  module.exports = { loginUser };
  