const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
const cartItemSchema = new Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number },
  priceAtAddition: { type: Number },
  totalPrice: { type: Number },
});
module.exports = mongoose.model("CartItem", cartItemSchema);
