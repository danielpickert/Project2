const { Post, User } = require("../models/index");
const passport = require("passport");

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "posts",
        options: { sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },
  create: (req, res) => {
    User.create({
      local: {
        email: req.body.email,
        password: req.body.password
      }
    }).then(user => {
      res.redirect(`/user/${user._id}`);
    });
},
  login: (req, res) => {
    res.render("user/login", { message: req.flash("loginMessage") });
  },
  createLogin: (req, res, next) => {
    const login = passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/user/login",
      failureFlash: true
    });

    return login(req, res, next);
  },
  signUp: (req, res) => {
    res.render("user/signup", { message: req.flash("signupMessage") });
  },
  createSignUp: (req, res) => {
    const signup = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/user/signup",
      failureFlash: true
    });

    return signup(req, res);
  },
  logout: (req, res) => {
    req.logout();
    res.redirect("/");
  },
  secret: (req, res) => {
    if (req.isAuthenticated()) { 
     res.render('secret') 
  }
    else {
     res.redirect('/')
  }
},
};