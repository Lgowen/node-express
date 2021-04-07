const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userInfo: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("comments", commentSchema);
