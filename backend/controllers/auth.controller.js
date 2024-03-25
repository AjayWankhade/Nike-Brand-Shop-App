const authService = require("../services/auth.service");

exports.login = (req, res) => {
  const { email, password } = req.body;

  authService
    .login(email, password)
    .then((token) => {
      res.json({ message: "Login successfully " + token });
    })
    .catch((error) => {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Wrong email or password... " });
    });
};

exports.register = (req, res) => {
  const { email, password } = req.body;

  authService
    .register(email, password)
    .then(() => {
      res.json({ message: "Registration successful" });
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};
