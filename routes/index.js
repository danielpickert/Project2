const express = require('express');
const router = express.Router();

// home
exports.home = (req, res) => {
  res.render("welcome", {
  	title : "Magic Traffic",
  })	
}


// notFound
exports.notFound = (req, res) => {
	res.send("This page doesn't exist")
}

