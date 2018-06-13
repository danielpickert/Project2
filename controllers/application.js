const { Post } = require("../models/Post");

module.exports = {
	index: (req, res) => {
		Post.find({})
		.sort({createdAt: -1})
		.limit(10)
		.populate("author")
		.then(tweets => {
			res.render("app/index", { tweets });
		});
	}
};