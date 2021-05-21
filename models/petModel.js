const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
    //id já é criado automaticamente
    petName: String,
    petAge: String,
    animalType: String,
    breed: String,
    ownerName: String,
    ownerContact: String

})

const Pet = new mongoose.model("Pet", petSchema);

module.exports = Pet;