import { DataTypes, QueryInterface, fn } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface, dataTypes: typeof DataTypes) => {
    await queryInterface.createTable('animals', {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: dataTypes.ENUM,
        values: ['dog', 'cat'],
        allowNull: true,
      },
      race: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: dataTypes.DATE,
        allowNull: false,
        defaultValue: fn('NOW'),
      },
      updatedAt: {
        type: dataTypes.DATE,
        allowNull: false,
        defaultValue: fn('NOW'),
      },
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('animals')
  },
}
