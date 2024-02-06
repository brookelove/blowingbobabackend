const Admin = require("../models/Admin");
const getAllAdmin = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.adminId });
    if (!admin) {
      return res.status(404).json({ message: "No admin with that ID" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createAdmin = async (req, res, next) => {
  console.log("Create Admin Controller");
  try {
    console.log("Request Body:", req.body);
    const admin = await Admin.create(req.body);
    if (!admin) {
      return res.status(404).json({
        message: "Admin created 🎉",
      });
    }

    res.json("Created the admin 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateAdmin = async (req, res, next) => {
  let id = req.body.id;
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!admin) {
      return res.status(404).json({ message: "No admin with that ID" });
    }
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "No admin with that ID" });
    }
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllAdmin,
  getSingleAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
};
