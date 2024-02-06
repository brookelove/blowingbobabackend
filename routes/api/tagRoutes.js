const express = require("express");
const tagRouter = express.Router();
const {
  getAllTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../../controllers/tagControllers");

tagRouter.get("/", getAllTags);
tagRouter.get("/:id", getSingleTag);
tagRouter.post("/", createTag);
tagRouter.put("/:id", updateTag);
tagRouter.delete("/:id", deleteTag);

module.exports = tagRouter;
