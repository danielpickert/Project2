const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/magic");

mongoose.Promise = Promise;

module.exports = mongoose;