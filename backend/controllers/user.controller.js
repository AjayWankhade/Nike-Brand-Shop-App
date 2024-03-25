const userService = require("../services/user.service");

exports.getUserById = (req, res) => {
  const userId = req.params.id;

  userService
    .getUserById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    })
    .catch((error) => {
      console.error("Error fetching user by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.createUser = (req, res) => {
  const userData = req.body;

  userService
    .createUser(userData)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.getAllUsers = (req, res) => {
  userService
    .getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.error("Error fetching all users:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  userService
    .updateUser(userId, userData)
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    })
    .catch((error) => {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  userService
    .deleteUser(userId)
    .then(() => {
      res.json({ message: "User deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};
