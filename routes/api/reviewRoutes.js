const express = require("express");
const reviewRouter = express.Router();
const {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
} = require("../../controllers/reviewControllers");

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:id", getSingleReview);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);

module.exports = reviewRouter;
