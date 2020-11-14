const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

/* Creating a Database Schema....schema should be the same format as req.body */
const FORegSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  role: {
    type: String,
    required: 'Please Pick a role',
  },
  gender: String,
  dateOfBirth: String,
  nin: String,
  phone: String,
  address: String,
  resindenceType: String,
  ward: String,
  fOnumber: String,
  activities: String,
  periodOfStay: String,
  dateOfReg: String,
});
// Setting the plugin to use passport
FORegSchema.plugin(passportLocalMongoose);
//Associating the schema with actual collection name
module.exports = mongoose.model('farmerOne', FORegSchema);
