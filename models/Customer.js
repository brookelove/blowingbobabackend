const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  shippingAddress: String,
  billingAddress: String,
  password: String, //hashed
});

module.exports = mongoose.model("Customer", customerSchema);
