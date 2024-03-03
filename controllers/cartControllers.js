const Cart = require("../models/Cart");
const Product = require("../models/Products");
const getAllCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find().populate("products");
    const formattedCarts = carts.map((cart) => ({
      ...cart.toObject(),
      productCount: cart.products.length,
    }));
    res.json(formattedCarts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const getSingleCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ _id: req.params.id }).populate(
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
const createCart = async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    if (!cart) {
      return res.status(404).json({
        message: "Cart created 🎉",
      });
    }
    res.status(201).json({ message: "Get Shopping", cart: cart });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { products, quantity } = req.body;
    const cart = await Cart.findById(id);
    if (!cart || !products || !quantity) {
      return res.status(400).json({ error: "Invalid request body format" });
    }
    // update cart products and quantity

    products.push(products[products.length - 1]);
    quantity.push(quantity[quantity.length - 1]);

    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      const productId = products[i];
      const quantityId = quantity[i];

      //get product prices to create the total
      const product = await Product.findById(productId);
      if (!product) {
        return res
          .status(404)
          .json({ error: `Product with ID ${productId} not found` });
      }

      // Calculate the subtotal for this product
      const subtotal = product.price * quantityId;
      totalPrice += subtotal;
    }
    cart.total = totalPrice;
    await cart.save();

    // Fetch the updated cart after adding the item
    const updatedCart = await Cart.findById(id);

    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteCart = async (req, res, next) => {
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
