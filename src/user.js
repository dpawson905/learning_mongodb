const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the schema for the structure of the database
const UserSchema = new Schema({
	name: String,
	postCount: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
