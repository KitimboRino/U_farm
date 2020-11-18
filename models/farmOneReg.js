const mongoose = require('mongoose');

/* Creating a Database Schema....schema should be the same format as req.body */
const FORegSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  role: String,
  gender: String,
  dateOfBirth: String,
  nin: String,
  phone: String,
  address: String,
  residenceType: String,
  ward: String,
  fOnumber: String,
  activities: String,
  periodOfStay: String,
  dateOfReg: String,
});

//Associating the schema with actual collection name
module.exports = mongoose.model('farmerOne', FORegSchema);
