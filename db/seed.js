const User = require("../models/User");
const { Post } = require("../models/Post");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password => {
	bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Post.find({}).remove(() => {
    let dan = User.create({
      local: {
        email: "daniel@gomagic.com",
        password: createPassword("magic")
      }
    }).then(user => {
      Promise.all([
        Post.create({
          content: "Go Magic!",
          author: user._id
        }).then(post => {
          user.posts.push(post);
        }),
        Post.create({
          content: "Why can't we win a game?",
          author: user._id
        }).then(post => {
          user.posts.push(post);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});
};