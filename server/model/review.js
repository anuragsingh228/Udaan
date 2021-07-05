const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// Create Schema
const ReviewSchema = new Schema({
  createdBy: {
    type: [ObjectId],
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  subheader: {
    type: String
  },
  bookName: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: []
  },
  activity:{
    type: [String],
    default:[],
  },
  likes: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});

module.exports = Review = mongoose.model("reviews", ReviewSchema);
