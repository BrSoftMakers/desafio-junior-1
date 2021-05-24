module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
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
      },
      created_at: { type: Sequelize.DataTypes.DATE },
      updated_at: { type: Sequelize.DataTypes.DATE }
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('pets');
  }
};
