const express = require("express");
const discountRouter = express.Router();
const {
  getAllDiscounts,
  getSingleDiscount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} = require("../../controllers/discountControllers");

discountRouter.get("/", getAllDiscounts);
discountRouter.get("/:id", getSingleDiscount);
discountRouter.post("/", createDiscount);
discountRouter.put("/:id", updateDiscount);
discountRouter.delete("/:id", deleteDiscount);

module.exports = discountRouter;
