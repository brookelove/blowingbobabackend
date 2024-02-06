const express = require("express");
const adminRouter = express.Router();
const {
  getAllAdmin,
  getSingleAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../../controllers/adminControllers");

adminRouter.get("/admin", getAllAdmin);
adminRouter.get("/admin/:id", getSingleAdmin);
adminRouter.post("/admin", createAdmin);
adminRouter.put("/admin/:id", updateAdmin);
adminRouter.delete("/admin/:id", deleteAdmin);

module.exports = adminRouter;
