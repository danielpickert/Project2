

// home
exports.home = (req, res) => {
 

  res.render("welcome", {
  	title : "Orlando Magic Fan Page",
  })	
}


// notFound
exports.notFound = (req, res) => {
	res.send("This page doesn't exist")
}

