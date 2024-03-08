const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const reviewSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  testimonial: String,
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = mongoose.model("Review", reviewSchema);
