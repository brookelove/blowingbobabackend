const express = require("express");
const cartRouter = express.Router();
const {
  getAllCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../../controllers/cartControllers");

cartRouter.get("/", getAllCarts);
cartRouter.get("/:id", getSingleCart);
cartRouter.post("/", createCart);
cartRouter.put("/:id", updateCart);
cartRouter.delete("/:id", deleteCart);

module.exports = cartRouter;
