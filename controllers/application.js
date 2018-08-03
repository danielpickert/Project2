const { Post } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Post.find({})
      .populate("author")
      .sort({ createdAt: -1 })
      .then(posts => {
        res.render("welcome", { posts });
      });
  }
};
