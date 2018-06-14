const { Post } = require("../models/Post");

function index(req, res) {
	console.log('helloworld')
}

module.exports = {
	index: (req, res) => {
		Post.find({})
		.sort({createdAt: -1})
		.limit(10)
		.populate("author")
		.then(posts => {
			res.render("app/index", { posts });
		});
	}
}
