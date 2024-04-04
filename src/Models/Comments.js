// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  comment: String
});

module.exports = mongoose.model('Comment', commentSchema);