const mongoose = require("mongoose");
const Product = require("./Product");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const cartSchema = new Schema({
  product: [Product],
  total: Number,
  isOrdered: Boolean,
});

module.exports = {
  getModel: (connection) => {
    return connection.model("TagModel", cartSchema);
  },
};
