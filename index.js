
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const routes = require("./routes");
const path = require("path");
const passport = require("passport");
const methodOverride = require("method-override");
const flash = require("connect-flash");

require('./config/passport')(passport)


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({ extended: true })); 




// const postController = require('./controllers/post')
// // home
// app.get("/", routes.home) 


// // posts a new post to the home page / db
// app.post("/", postController.create)

// app.get("/new", postController.new)


// // click sign up
// app.get("/user/signup", (req, res) => {
//   res.render("user/signup", {
//   	name: req.body.name,
// })
// });


// // click log in
// app.get("/user/login", (req, res) => {
// 	res.render("user/login", {
// 		name: req.body.name	
// 	})
// });

// // returns user to home page after login or signup
// app.post("/user", (req, res) => {
// 	res.redirect("/")
// })

// // add a new user to the db


// // update post in the db
// app.put("/post/:id", (req, res) => {
// 	res.send("hey")
// })

// // delete post from the db
// app.delete("/post/:id", (req, res) => {
// 	res.send("delete")
// })



// // notFound
// app.get('*', routes.notFound)


app.use(require("./routes/index.js"));


app.set("view engine", "hbs")

// Fix routes and then implement below:
// app.use(require("./routes/index.js"));

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })
