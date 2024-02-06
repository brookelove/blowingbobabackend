const express = require("express");
const cartRouter = express.Router();
const {
  getAllCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../../controllers/cartControllers");

cartRouter.get("/cart", getAllCarts);
cartRouter.get("/cart/:id", getSingleCart);
cartRouter.post("cart", createCart);
cartRouter.put("/cart/:id", updateCart);
cartRouter.delete("/cart/:id", deleteCart);

module.exports = cartRouter;
