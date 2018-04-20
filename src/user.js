const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// This is the schema for the structure of the database
const UserSchema = new Schema({
	name: {
		type: String,
		validate: {
			validator: (name) => name.length > 2,
			message: 'Name must be at least 3 characters.'
		},
		required: [true, 'Name is required.']
	},
	postCount: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
