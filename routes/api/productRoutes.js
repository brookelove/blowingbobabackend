const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/productControllers");

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
