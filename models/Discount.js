const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const discountSchema = new Schema({
  discountName: { type: String },
  amount: { type: Number },
  available: { type: Boolean, default: false },
  dateOpen: { Date },
  dateClose: { Date },
});

module.exports = mongoose.model("Discount", discountSchema);
