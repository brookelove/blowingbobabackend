const router = express.Router();
const express = require("express");
const {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../../controllers/customerControllers");

router.get("/customer", getAllCustomers);
router.get("/customer/:id", getSingleCustomer);
router.post("/customer", createCustomer);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);
