const mongoose = require("mongoose");
const Product = require("./Product");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const cartSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  quantity: [{ type: Number, default: 1 }],
  total: { type: Number, default: 0 },
  isOrdered: { type: Boolean, default: false },
});

module.exports = {
  getModel: (connection) => {
    return connection.model("TagModel", cartSchema);
  },
};
