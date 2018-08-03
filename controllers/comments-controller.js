const { Post, Comment, User } = require("../models/index");

module.exports = {
  addcomment: (req, res) => {
    // Comment.create({ content: req.body.content })
    //   .then(newcomment => {
    //     newcomment.save();
    //   })
    const comment = new Comment({ content: req.body.content });
    comment
      .save()
      .then(comment => {
        return Post.findById(req.params.id);
      })
      .then(post => {
        post.comments.unshift(comment);
        return post.save();
      })
      .then(post => {
        res.redirect(`/post/${post._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
