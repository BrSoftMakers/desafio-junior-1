import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Pet from '../app/models/Pet';

const models = [Pet];

class Database {
  constructor() {
    this.init();
  }

  init() {
    if (process.env.NODE_ENV === 'test') {
      this.connection = new Sequelize({
        dialect: databaseConfig.dialect,
        storage: databaseConfig.storage,
        define: databaseConfig.define
      });
    } else {
      this.connection = new Sequelize(databaseConfig);
    }

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
