const mongoose = require('../db/connection')
const { Post, Comment } = require('./Post')
const User = require('./User')


module.exports = {
	Post: mongoose.model('Post', Post),
	Comment: mongoose.model('Comment', Comment),
	User: mongoose.model('User', User)
}