const { Cart, Product } = require("../models");
const getAllCarts = async (req, res) => {
  try {
    const carts = carts.map((cart) => ({
      ...cart.toObject(),
      productCount: cart.products.length,
    }));
    res.json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ _id: req.params.cartId }).populate(
      "products"
    );
    if (!cart) {
      return res.status(404).json({ message: "No cart with that ID" });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    if (!cart) {
      return res.status(404).json({
        message: "Cart created 🎉",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateCart = async (req, res) => {
  try {
    const { id, product, quantity } = req.body;
    const cart = await Cart.findById(id);

    if (!cart) {
      return res.status(404).json({ message: "No cart with that ID" });
    }

    const index = cart.products.findIndex((p) => p.equals(product));
    if (index !== -1) {
      cart.quantities[index] += quantity;
    } else {
      cart.products.push(product);
      cart.quantities.push(quantity);
    }
    cart.total += product.price * quantity;

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteCart = async (res, res, next) => {
  let id = req.params.id;
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: "No cart with that ID" });
    }
    res.json({ message: "Cart deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllCarts,
  getSingleCart,
  createCart,
  updateCart,
  deleteCart,
};
