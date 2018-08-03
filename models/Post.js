const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = {
  Post,
  Comment
};
