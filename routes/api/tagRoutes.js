const express = require("express");
const tagRouter = express.Router();
const {
  getAllTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
} = require("../../controllers/tagControllers");

tagRouter.get("/tag", getAllTags);
tagRouter.get("/tag/:id", getSingleTag);
tagRouter.post("/tag", createTag);
tagRouter.put("/tag/:id", updateTag);
tagRouter.delete("/tag/:id", deleteTag);

module.exports = tagRouter;
