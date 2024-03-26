const authService = require("../services/auth.service");
const productService = require("../services/product.service");

exports.getProductById = (req, res) => {
  const productId = req.params.id;

  productService
    .getProductById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    })
    .catch((error) => {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.createProduct = (req, res) => {
  const { name, description, price, category } = req.body;

  productService
    .createProduct({ name, description, price, category })
    .then((product) => {
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    })
    .catch((error) => {
      console.error("Error creating product:", error);
      res.status(500).json({ message: "Failed to create product" });
    });
};

exports.getAllProduct = (req, res) => {
  productService
    .getAllProduct()
    .then((products) => {
      res.json(products);
    })
    .catch((error) => {
      console.error("Error fetching all products:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.updateProduct = (req, res) => {
  const productId = req.params.id;
  const userData = req.body;

  productService
    .updateProduct(productId, userData)
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(updatedProduct);
    })
    .catch((error) => {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;

  productService
    .deleteProduct(productId)
    .then(() => {
      res.json({ message: "Product deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};
