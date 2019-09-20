const mongoose = require("mongoose");

const SavedSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  authors: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }
});

module.exports = mongoose.model("saved", SavedSchema);
