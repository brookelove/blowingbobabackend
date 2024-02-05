const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Customer = require("./Customer");
const Cart = require("./Cart");

mongoose.Promise = global.Promise;

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  isManager: Boolean,
  currentCustomers: [Customer],
  Cart: [Cart],
});

module.exports = {
  getModel: (connection) => {
    return connection.model("TagModel", adminSchema);
  },
};
