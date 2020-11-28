const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Creating a Database Schema for users
const userSchema = new mongoose.Schema({
  username: String,
  role: String,
  password: String,
});
// Setting the plugin to use passport
userSchema.plugin(passportLocalMongoose);

//Associating the schema with actual collection name
module.exports = mongoose.model('Users', userSchema);
