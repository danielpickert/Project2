const express = require('express');
const router = express.Router();


router.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

router.use('/', require('./application.js'));
router.use('/user', require('./user'));
router.use('/post', require('./post'));


router.all('*', (req, res) => {
  res.status(400).send();

 });

module.exports = router;








// const express = require('express');
// const router = express.Router();
// const { Post } = require("../models/index");

// module.exports = {
// 	home : (req, res) => {
// 		Post.find({})
// 			.then((posts) => {
// 				res.render("welcome", { posts })
// 			});	  
// 	},
// 	notFound : (req, res) => {
// 		res.send("This page doesn't exist")
// 	},
// };


