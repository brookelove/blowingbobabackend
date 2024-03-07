const mongoose = require("mongoose");
// const Product = require("./Products");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const cartSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customer" },
  items: [{ type: Schema.Types.ObjectId, ref: "CartItem" }],
  total: { type: Number, default: 0 },
  isDiscount: { type: Boolean, default: false },
  discount: { type: Number },
  orderStatus: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isOrdered: { type: Boolean, default: false },
});

module.exports = mongoose.model("Cart", cartSchema);
