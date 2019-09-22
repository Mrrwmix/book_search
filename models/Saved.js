const mongoose = require("mongoose");

const SavedSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  authors: { type: Array, required: true, default: "Unknown" },
  description: { type: String, default: "No description provided" },
  image: {
    type: String,
    default:
      "https://media.npr.org/assets/img/2018/11/18/gettyimages-865109088-170667a_wide-f4e3c4a58ad5e1268dec3654c0b2d490e320bba6-s800-c85.jpg"
  },
  link: { type: String, required: true }
});

module.exports = mongoose.model("saved", SavedSchema);
