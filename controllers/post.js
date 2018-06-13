const { Post, Comment } = require("../models/Post");

module.exports = {
	create: (req, res) => {
		Post.create({
			content: req.body.post.content,
			author: req.user._id
		}).then(post => {
			req.user.posts.push(post);
			req.user.save(err => {
				res.redirect(`/post/${post_id}`);
			});
		});
	},
	new: (req, res) => {
		res.render("post/new");
	},
	show: (req, res) => {
		Comment.findOne({_id: req.params.id })
		.populate("author")
		.exec(function(err, post) {
			Comment.populate(post.comments, { path: "author" }, function(err, comments) {
				post.comments = comments;
				console.log(post);
				res.render("post/show", post);
			});
		});
	},
	update: (req, res) => {
		let { content } = req.body;
		Post.findOne({ _id: req.params.id }).then(post => {
			post.comments.push({
				content,
				author: req.user._id
			});
			post.save(err => {
				res.redirect(`/post/${post._id}`);
			});
		});
	},
	requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
 };