const CartItem = require("../models/CartItem");
const Product = require("../models/Products");
const getAllCartItems = async (req, res, next) => {
  try {
    const cartItems = await CartItem.find().populate("products");
    const formattedCarts = cartItems.map((cartItem) => ({
      ...cartItem.toObject(),
      productCount: cartItem.products.length,
    }));
    res.json(formattedCarts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const getSingleCartItem = async (req, res, next) => {
  try {
    const cartItem = await CartItem.findOne({ _id: req.params.id }).populate(
      "products"
    );
    if (!cartItem) {
      return res.status(404).json({ message: "No cart with that ID" });
    }
    res.json(cartItem);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createCartItem = async (req, res, next) => {
  try {
    const cartItem = await CartItem.create(req.body);
    if (!cartItem) {
      return res.status(404).json({
        message: "Cart item created 🎉",
      });
    }
    res.status(201).json({ message: "Get Shopping", cartItem: cartItem });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { product, quantity } = req.body;

    // Find the cart item by ID
    const cartItem = await CartItem.findById(id);
    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // Update the product and quantity
    if (product) {
      cartItem.product = product;
    }
    if (quantity) {
      cartItem.quantity = quantity;
    }
    const selectedProduct = await Product.findById(cartItem.product);
    if (!selectedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    cartItem.priceAtAddition = selectedProduct.price * cartItem.quantity;
    await cartItem.save();

    res.json({ message: "Cart item updated successfully", cartItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteCartItem = async (req, res, next) => {
  let id = req.params.id;
  try {
    const cartItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "No cart with that ID" });
    }
    res.json({ message: "Cart item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllCartItems,
  getSingleCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
};
