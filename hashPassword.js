const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hashedPassword);
}

// Call the function with the password you want to hash
hashPassword("Bokova22!"); // Replace with your desired password
