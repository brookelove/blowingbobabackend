const router = express.Router();
const express = require("express");
const {
  getAllTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../../controllers/tagControllers");

router.get("/tag", getAllTags);
router.get("/tag/:id", getSingleTag);
router.post("/tag", createTag);
router.put("/tag/:id", updateTag);
router.delete("/tag/:id", deleteTag);
