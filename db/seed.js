const { Post, User } = require("../models/index");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Post.find({}).remove(() => {
    console.log('db is clean')
    let dan = User.create({
      local: {
        email: "daniel@gomagic.com",
        password: createPassword("magic")
      }
    }).then(user => {
      console.log('new user created')
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
      ]).then((test) => {
        console.log('posts created')
        user.save(err => {
          if (err) console.log(err)
          process.exit()
        });
      });
    });
  });
});
