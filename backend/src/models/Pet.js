const { Model, DataTypes } = require("sequelize");

class Pet extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Race, { foreignKey: "race_id", as: "race" });
  }
}

module.exports = Pet;
