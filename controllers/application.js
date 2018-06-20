const { Post } = require("../models/index");

module.exports = {
	index: (req, res) => {
		Post.find({})
			.sort({createdAt: -1})
			.populate("author")
			.then((posts) => {
				res.render("welcome", { posts })
			});	  
	},
}



// module.exports = {
// 	index: (req, res) => {
// 		Post.find({})
// 		.sort({createdAt: -1})
// 		.limit(10)
// 		.populate("author")
// 		.then(posts => {
// 			res.render("app/postpage", { posts });
// 		});
// 	}
// };
