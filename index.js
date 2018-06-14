const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const routes = require("./routes")
const path = require("path")
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({ extended: true })); 


// home
app.get("/", routes.home) 


// click sign up
app.get("/user/sign-up", (req, res) => {
  res.render("signup", {
  	name: req.body.name,
})
});

// click log in
app.get("/user/login", (req, res) => {
	res.render("login", {
		name: req.body.name	
	})
});

// returns user to home page after login or signup
app.post("/user", (req, res) => {
	// do something (like create or sign in a user)
	res.redirect('/')
})

// posts a new post to the home page
// app.post("/", (req,res) => {

// }



// notFound
app.get('*', routes.notFound)

app.set("view engine", "hbs")

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  }), () => {
  console.log("app listening on port 4000")
}