const express = require("express");
const adminRouter = express.Router();
const {
  getAllAdmin,
  getSingleAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../../controllers/adminControllers");

adminRouter.get("/", getAllAdmin);
adminRouter.get("/:id", getSingleAdmin);
adminRouter.post("/", createAdmin);
adminRouter.put("/:id", updateAdmin);
adminRouter.delete("/:id", deleteAdmin);

module.exports = adminRouter;
