const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const routes = require("./routes")
const path = require("path")
app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({ extended: true })) 


// home
app.get("/", routes.home) 


// after name submit
app.post("/", (req, res) => {
  res.render("index", {
  	name: req.body.name,
})
})


// notFound
app.get('*', routes.notFound)

app.set("view engine", "hbs")

app.listen(4000, () => {
  console.log("app listening on port 4000")
})