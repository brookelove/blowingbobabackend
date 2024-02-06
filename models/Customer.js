const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = require("./Cart");

mongoose.Promise = global.Promise;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }], //needs to be the cart id
  pastOrders: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
});

module.exports = {
  getModel: (connection) => {
    return connection.model("TagModel", customerSchema);
  },
};
