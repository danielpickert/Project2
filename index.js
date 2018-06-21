
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const hbs = require("hbs");

const app = express();
require('./config/passport')(passport);

hbs.registerPartials(__dirname + "/views/partials");

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "GO-MAGIC",
    saveUninitialized: true,
    resave: false
  })
);

app.use(express.static(path.join(__dirname,"public")));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(require("./routes/index.js"));

// View Engine
app.set("view engine", "hbs")


// app.use(function (err, req, res, next {
// 	res.locals.message = err.messageres.locals.error = req.app.get('env' === 'development' ? err: {}
// }));

// app.use(function (req, res, next) {
// 	global.currentUser = req.currentUser 
// 	res.locals.currentUser = req.currentUser
// 	next();
// });


app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  });
