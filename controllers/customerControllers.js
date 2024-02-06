const Customer = require("../models/Customer");
const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.customerId });
    if (!customer) {
      return res.status(404).json({ message: "No customer with that ID" });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.create(req.body);
    if (!customer) {
      return res.status(404).json({
        message: "customer created 🎉",
      });
    }

    res.json("Created the customer 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateCustomer = async (req, res, next) => {
  let id = req.body.id;
  try {
    const customer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!customer) {
      return res.status(404).json({ message: "No customer with that ID" });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteCustomer = async (req, res, next) => {
  let id = req.params.id;
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "No customer with that ID" });
    }
    res.json({ message: "customer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
