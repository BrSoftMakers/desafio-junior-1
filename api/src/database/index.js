import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Animal from '../models/Animal';

const models = [Animal];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
// models.forEach((model) => model.associate && model.associate(connection.models));
