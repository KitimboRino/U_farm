const mongoose = require('mongoose');

/* Creating a Database Schema....schema should be the same format as req.body */
const prodSchema = new mongoose.Schema({
  id: String,
  produceName: String,
  dateOfUpload: String,
  phone: String,
  address: String,
  modeOfDelivery: String,
  ward: String,
  unitPrice: String,
  quantity: String,
  produceType: String,
  mPayment: String,
  activities: String,
  image: String,
  Status: String,
});

//Associating the schema with actual collection name
module.exports = mongoose.model('uProduce', prodSchema);
