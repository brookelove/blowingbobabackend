const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Tag = require("./Tags");

mongoose.Promise = global.Promise;

const productSchema = new Schema({
  productName: String,
  description: String,
  price: Number,
  stock: Number,
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = mongoose.model("Product", productSchema);
