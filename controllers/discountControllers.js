const Discount = require("../models/Discount");
const convert = require("xml-js");
const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.find();
    res.json(discounts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const getSingleDiscount = async (req, res, next) => {
  try {
    const discount = await Discount.findOne({ _id: req.params.id });
    if (!discount) {
      return res.status(404).json({ message: "No discount with that ID" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createDiscount = async (req, res, next) => {
  console.log("Create Discount Controller");
  try {
    console.log("Request Body:", req.body);
    const discount = await Discount.create(req.body);
    if (!discount) {
      return res.status(404).json({
        message: "Discount created 🎉",
      });
    }

    res.json("Created the discount 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateDiscount = async (req, res, next) => {
  let id = req.body.id;
  try {
    const discount = await Discount.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!discount) {
      return res.status(404).json({ message: "No discount with that ID" });
    }
    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteDiscount = async (req, res, next) => {
  try {
    const discount = await Discount.findByIdAndDelete(req.params.id);
    if (!discount) {
      return res.status(404).json({ message: "No discount with that ID" });
    }
    res.json({ message: "Discount deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllDiscounts,
  getSingleDiscount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
};
