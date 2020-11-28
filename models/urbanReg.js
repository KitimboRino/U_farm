const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


// Creating a database Schema..same format as body
const UFRegSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  role:String,
  gender: String,
  dateOfBirth: String,
  nin: String,
  phone: Number,
  ward: String,
  id: String,
  activities: [{type: String}],
  dateOfReg: String,
});

// Setting the plugin to use the passport(test if needed)
UFRegSchema.plugin(passportLocalMongoose);

// Associating the Schema with actual collection name
module.exports = mongoose.model('urbfarmer', UFRegSchema);
