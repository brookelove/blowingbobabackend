const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  isManager: Boolean,
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = mongoose.model("Admin", adminSchema);
