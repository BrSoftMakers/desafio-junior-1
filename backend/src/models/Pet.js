const Sequelize = require('sequelize')
const database = require('../infrastructure/database.js')
const petOwner = require('./PetOwner.js')

const pet = database.define('pet', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = pet