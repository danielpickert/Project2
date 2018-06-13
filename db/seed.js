const User = require("../models/User");
const { Post } = require("../models/Post");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password => {
	bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
