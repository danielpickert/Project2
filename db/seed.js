const { Post, User } = require("../models/index");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
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
          content: "Go Magic",
          author: user._id
        }).then(post => {
          user.posts.push(post);
        }),
        Post.create({
          content: "TESTING",
          author: user._id
        }).then(post => {
          user.posts.push(post);
        })
      ]).then((test) => {
        user.save(err => {
          if (err) console.log(err)
          process.exit()
        });
      });
    });
  });
});
