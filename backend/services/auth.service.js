const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret } = require("../config/auth.config");
const User = require("../models/user.model");

// Function declaration for generateToken
function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };

  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw error;
  }
};

exports.register = async (email, password) => {
  try {
    const user = await User.create({ email, password });
    return "Registration successful" + user;
  } catch (error) {
    throw error;
  }
};

exports.login = async (email, password) => {
  try {
    // Find the user in the database based on the provided email
    const user = await User.findOne({ email });

    // If the user is not found or the password is incorrect, throw an error
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    // If authentication is successful, generate a JWT token using the declared function
    const token = generateToken(user);

    // Return the token
    return token;
  } catch (error) {
    throw error;
  }
};
