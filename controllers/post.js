const { Post, Comment, User } = require("../models/index");

module.exports = {
  create: (req, res) => {
    Post.create({
      content: req.body.content,
      author: req.user.id
    }).then(post => {
      req.user.posts.push(post);
      req.user.save(err => {
        res.redirect("/");
      });
    });
  },
  new: (req, res) => {
    res.render("post/new");
  },
  show: (req, res) => {
    Post.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, post) {
        // Comment.populate(post.comments, { path: "author" }, function(
        //   err,
        //   comments
        // )
        // {
        //   post.comments = comments;

        res.render("post/show", post);
      });
  },
  // );
  // },
  update: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { content: req.body.content }).then(
      post => {
        post.save(err => {
          res.redirect("/");
        });
      }
    );
  },
  destroy: (req, res) => {
    Post.findByIdAndRemove(req.params.id, { content: req.body.content }).then(
      post => {
        post.save(err => {
          res.redirect("/");
        });
      }
    );
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};
