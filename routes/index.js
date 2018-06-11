const moviesJSON = require('../movies.json')

// home
exports.home = (req, res) => {
  
  var movies = moviesJSON.movies

  res.render("welcome", {
  	title : "The Dark Knight Trilogy",
  	movies : movies
  })	
}

// movie_single
exports.movie_single = (req, res) => {
  var number_in_trilogy = req.params.number_in_trilogy
  res.send("This is the page for movie " + number_in_trilogy)
}

// notFound
exports.notFound = (req, res) => {
	res.send("This page doesn't exist")
}

