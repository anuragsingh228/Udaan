const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Create Schema
const CommentSchema = new Schema({
  writtenBy: {
    type: ObjectId,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, {timestamps: true});

module.exports = Comment = mongoose.model("comments", CommentSchema);
