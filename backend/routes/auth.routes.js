const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const verifySignUp = require("../middleware/verifySignUp");

router.post("/login", authController.login);
router.post(
  "/register",
  verifySignUp.checkDuplicateEmail,
  authController.register
);

module.exports = router;
