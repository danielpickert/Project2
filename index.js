
const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const routes = require("./routes");
const path = require("path");
const passport = require("passport");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

require('./config/passport')(passport)

app.use(bodyParser.urlencoded({ extended: true })); 


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(cookieParser());
app.use(
  session({
    secret: "GO-MAGIC",
    saveUninitialized: true,
    resave: false
  })
);
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname,"public")))


app.use(require("./routes/index.js"));


app.set("view engine", "hbs")


app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })
