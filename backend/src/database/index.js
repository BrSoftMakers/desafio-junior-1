const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//Models

const connection = new Sequelize(dbConfig);

module.exports = connection;
