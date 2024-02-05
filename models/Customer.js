const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = require("./Cart");

mongoose.Promise = global.Promise;

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  zipCode: Number,
  cart: [Cart], //needs to be the cart id
});

module.exports = {
  getModel: (connection) => {
    return connection.model("TagModel", customerSchema);
  },
};
