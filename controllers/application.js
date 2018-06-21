const { Post } = require("../models/index");

module.exports = {
	index: (req, res) => {
		Post.find({})
			.sort({ createdAt: -1 })
			.populate("author")
			.then((posts) => {
				res.render("welcome", { posts })
			});	  
	},
}
