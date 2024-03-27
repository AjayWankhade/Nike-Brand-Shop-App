const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authJwt = require("../middleware/authJwt");

router.get("/:id", userController.getUserById);
router.get("/", authJwt.verifyToken, userController.getAllUsers);
router.put("/:id", authJwt.verifyToken, userController.updateUser);
router.post("/", authJwt.verifyToken, userController.createUser);
router.delete("/:id", authJwt.verifyToken, userController.deleteUser);

module.exports = router;
