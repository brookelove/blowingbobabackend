const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tag = require("./Tags");

mongoose.Promise = global.Promise;

const productSchema = new Schema({
  productName: String,
  description: String,
  price: Number,
  stock: Number,
  tags: [Tag],
});

module.exports = {
  getModel: (connection) => {
    return connection.model("Product", productSchema);
  },
};
