const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const tagSchema = new Schema({
  tagName: String,
  color: String,
  createdAt: Date,
});

module.exports = mongoose.model("Tag", tagSchema);
