const mongoose = require("mongoose");
// const Product = require("./Products");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const cartSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  quantity: [{ type: Number, default: 1 }],
  total: { type: Number, default: 0 },
  isOrdered: { type: Boolean, default: false },
});

module.exports = mongoose.model("Cart", cartSchema);
