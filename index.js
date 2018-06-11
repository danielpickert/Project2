const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.get("/:table", (req, res) => {
  res.send(`hello ${req.params.table}`)
})

app.get('/:name', function(req, res) {
	res.render('template', { name: req.params.name })
})

app.get("/", (req, res) => {
  res.render("welcome")
})

app.post("/", (req, res) => {
  res.render("index", {
    name: req.body.name,
  })
})

app.set("view engine", "hbs")

app.listen(4000, () => {
  console.log("app listening on port 4000")
})