const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const productController = require("../controllers/product.controller");

router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProduct);
router.put("/:id", productController.updateProduct);
router.post("/", productController.createProduct);
router.delete("/:id", userController.deleteUser);

module.exports = router;
