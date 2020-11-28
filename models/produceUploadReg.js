const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


/* Creating a Database Schema....schema should be the same format as req.body */
const prodSchema = new mongoose.Schema({
  id: String,
  produceName: String,
  dateOfUpload: String,
  phone: String,
  address: String,
  modeOfDelivery: [{ type: String }],
  ward: String,
  unitPrice: String,
  quantity: String,
  produceType: String,
  mPayment: [{ type: String }],
  activities: [{ type: String }],
  image: String,
  status: String,
});

// Setting the plugin to use passport
prodSchema.plugin(passportLocalMongoose);
//Associating the schema with actual collection name
module.exports = mongoose.model('uProduce', prodSchema);
