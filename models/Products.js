const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Tag = require("./Tags");

mongoose.Promise = global.Promise;

const productSchema = new Schema({
  productName: String,
  description: String,
  price: Number,
  stock: Number,
  ifJelly: Boolean,
  whatJelly: String,
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  images: [String],
});

module.exports = mongoose.model("Product", productSchema);
