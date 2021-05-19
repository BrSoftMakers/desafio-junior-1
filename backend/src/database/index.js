const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//Models
const User = require("../models/User");
const Pet = require("../models/Pet");
const Race = require("../models/Race");

const connection = new Sequelize(dbConfig);

User.init(connection);
Race.init(connection);
Pet.init(connection);

User.associate(connection.models);
Race.associate(connection.models);
Pet.associate(connection.models);

module.exports = connection;
