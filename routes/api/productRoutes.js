const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/productControllers");

productRouter.get("/product", getAllProducts);
productRouter.get("/product/:id", getSingleProduct);
productRouter.post("/product", createProduct);
productRouter.put("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProduct);

module.exports = productRouter;
