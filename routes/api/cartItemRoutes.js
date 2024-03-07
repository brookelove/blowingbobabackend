const express = require("express");
const cartItemRouter = express.Router();
const {
  getAllCartItems,
  getSingleCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
} = require("../../controllers/cartItemControllers");

cartItemRouter.get("/", getAllCartItems);
cartItemRouter.get("/:id", getSingleCartItem);
cartItemRouter.post("/", createCartItem);
cartItemRouter.put("/:id", updateCartItem);
cartItemRouter.delete("/:id", deleteCartItem);

module.exports = cartItemRouter;
