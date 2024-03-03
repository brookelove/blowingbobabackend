const Product = require("../models/Products");
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "No product with that ID" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({
        message: "product created 🎉",
      });
    }

    res.json("Created the product 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateProduct = async (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({ message: "No product with that ID" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteProduct = async (req, res, next) => {
  let id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(req.params.id); //might change to isShown and make boolean either true or false so then it is not deleted but managers
    if (!product) {
      return res.status(404).json({ message: "No product with that ID" });
    }
    res.json({ message: "product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
