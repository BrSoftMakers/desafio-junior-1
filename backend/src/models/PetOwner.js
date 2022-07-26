const Sequelize = require('sequelize')
const database = require('./infrastructure/database.js')
const pet = require('../models/Pet.js')

const petOwner = database.define('petOwner', {
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
  phoneNumber: {
    type: Sequelize.String,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.String,
    allowNull: false
  },
  street: {
    type: Sequelize.String,
    allowNull: false
  },
  houseNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

petOwner.hasMany(pet)

module.exports = petOwner