import { DataTypes, QueryInterface, fn } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface, dataTypes: typeof DataTypes) => {
    await queryInterface.createTable('customerAnimal', {
      customerId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'customers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      animalId: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'animals',
          key: 'id',
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
    await queryInterface.dropTable('customerAnimal')
  },
}
