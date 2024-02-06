const router = express.Router();
const express = require("express");
const {
  getAllCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../../controllers/cartControllers");

router.get("/cart", getAllCarts);
router.get("/cart/:id", getSingleCart);
router.post("cart", createCart);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCart);
