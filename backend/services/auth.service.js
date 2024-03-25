const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { secret } = require("../config/auth.config");
const User = require("../models/user.model");

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
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    const token = generateToken(user);

    return token;
  } catch (error) {
    throw error;
  }
};
