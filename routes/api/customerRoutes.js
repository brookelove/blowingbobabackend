const express = require("express");
const customerRouter = express.Router();
const {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../../controllers/customerControllers");

customerRouter.get("/", getAllCustomers);
customerRouter.get("/:id", getSingleCustomer);
customerRouter.post("/", createCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

module.exports = customerRouter;
