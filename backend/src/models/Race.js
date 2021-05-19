const { Model, DataTypes } = require("sequelize");

class Race extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Pet, { foreignKey: "race_id", as: "pets" });
  }
}

module.exports = Race;
