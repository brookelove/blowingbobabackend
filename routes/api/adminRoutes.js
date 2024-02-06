const router = express.Router();
const express = require("express");
const {
  getAllAdmin,
  getSingleAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../../controllers/adminControllers");

router.get("/admin", getAllAdmin);
router.get("/admin/:id", getSingleAdmin);
router.post("/admin", createAdmin);
router.put("/admin/:id", updateAdmin);
router.delete("/admin/:id", deleteAdmin);
