import Sequelize, { Model } from 'sequelize';

class Pet extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
        specie: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        breed: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        owner: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        img_url: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Pet;
