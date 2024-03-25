const userService = require("../services/user.service");

exports.checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await userService.getUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // If email is not found, proceed to the next middleware
    next();
  } catch (error) {
    console.error("Error checking duplicate email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
