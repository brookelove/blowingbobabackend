const Tag = require("../models/Tags");
const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getSingleTag = async (req, res) => {
  try {
    const tag = await Tag.findOne({ _id: req.params.tagId });
    if (!tag) {
      return res.status(404).json({ message: "No tag with that ID" });
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    if (!tag) {
      return res.status(404).json({
        message: "tag created 🎉",
      });
    }

    res.json("Created the tag 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateTag = async (req, res) => {
  let id = req.body.id;
  try {
    const tag = await Tags.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!tag) {
      return res.status(404).json({ message: "No tag with that ID" });
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteTag = async (res, res, next) => {
  let id = req.params.id;
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id); //might change to isShown and make boolean either true or false so then it is not deleted but managers
    if (!tag) {
      return res.status(404).json({ message: "No tag with that ID" });
    }
    res.json({ message: "tag deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
};
