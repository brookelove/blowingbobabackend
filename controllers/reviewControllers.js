const Review = require("../models/Review");
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const getSingleReview = async (req, res, next) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    if (!review) {
      return res.status(404).json({ message: "No review with that ID" });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json(err);
  }
};
const createReview = async (req, res, next) => {
  console.log("Create review Controller");
  try {
    console.log("Request Body:", req.body);
    const review = await Review.create(req.body);
    if (!review) {
      return res.status(404).json({
        message: "review created 🎉",
      });
    }

    res.json("Created the review 🎉");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const updateReview = async (req, res, next) => {
  let id = req.body.id;
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!review) {
      return res.status(404).json({ message: "No review with that ID" });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "No review with that ID" });
    }
    res.json({ message: "review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};
