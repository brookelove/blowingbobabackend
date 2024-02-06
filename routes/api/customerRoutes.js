const express = require("express");
const customerRouter = express.Router();
const {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../../controllers/customerControllers");

customerRouter.get("/customer", getAllCustomers);
customerRouter.get("/customer/:id", getSingleCustomer);
customerRouter.post("/customer", createCustomer);
customerRouter.put("/customer/:id", updateCustomer);
customerRouter.delete("/customer/:id", deleteCustomer);

module.exports = customerRouter;
