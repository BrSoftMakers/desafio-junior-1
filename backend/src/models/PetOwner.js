const Sequelize = require('sequelize')
const database = require('./infrastructure/database.js')

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
  address: {
    type: Sequelize.String,
    allowNull: false
  }
})

module.exports = petOwner