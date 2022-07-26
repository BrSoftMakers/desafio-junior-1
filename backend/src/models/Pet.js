const Sequelize = require('sequelize')
const database = require('./infrastructure/database.js')
const petOwner = require('../models/PetOwner.js')

const pet = database.define('pet', {
  id: {
    type: Sequelize.INTEER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.String,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  typeOfAnimal: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  breedOfAnimal: {
    type: Sequelize.String,
    allowNull: false
  },
})

pet.belongsTo(petOwner)

module.exports = pet