const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  isManager: Boolean,
});

module.exports = mongoose.model("Admin", adminSchema);
