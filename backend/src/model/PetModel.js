const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  //id: {type: String, required: true},
  name: {type: String, required: true},
  age: {type: Number, required: true},
  type: {type: String, required: true},
  breed: {type: String, required: true},
  ownerName: {type: String, required: true},
  ownerTel: {type: String, required: true},
});

module.exports = mongoose.model('Pet', PetSchema);