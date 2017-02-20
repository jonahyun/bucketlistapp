var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	passowrd: String
});

var model = mongoose.model('user', userSchema);

module.exports = model;