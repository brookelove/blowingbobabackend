const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const tagSchema = new Schema({
  tagName: String,
  color: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tag", tagSchema);
