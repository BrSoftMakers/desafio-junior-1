import { DataTypes, QueryInterface, fn } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface, dataTypes: typeof DataTypes) => {
    await queryInterface.createTable('customerAddresses', {
      id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      zipCode: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      customerId: {
        type: dataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          key: 'id',
          model: 'customers',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('customerAddresses')
  },
}
